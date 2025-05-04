const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');
const Product = require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');

// In-memory guest cart store (for demo; use DB for production)
const guestCarts = {};

exports.getProducts = async (req, res, next) => {
    let products;

    try {
        products = await Product.find();
        
        if (!products || products.length === 0) {
            return next(new HttpError('No products found.', 404));
        }
        
        res.status(200).json({ products: products.map(product => product.toObject({ getters: true })) });
    }
    catch (err) {
        const error = new HttpError('Something went wrong, could not find products.', 500);
        return next(error);
    }
}

exports.getProductById = async (req, res, next) => {
    const productId = req.params.pid;

    let product;

    try{
        product = await Product.findById(productId);
    }
    catch(err){
        const error = new HttpError('Something went wrong, could not find a product.', 500);
        return next(error);
    }
    
    if(!product){
        const error = new HttpError('Could not find a product for the provided id.', 404);
        return next(error);
    }

    res.json({ product: product.toObject({ getters: true }) });

}

exports.createProduct = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty){
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }

    const { name, category, kind, color, colorCode, description, fabricSpecifications,
            productInfo1, productInfo2, productInfo3, currentPrice, previousPrice, stock,
            image1, image2, sizes, isBestSeller, skinTones, ageRange } = req.body;

    const createdProduct = new Product({
        id: uuidv4(),
        name,
        category,
        kind,
        color,
        colorCode,
        description,
        fabricSpecifications,
        productInfo1,
        productInfo2,
        productInfo3,
        currentPrice,
        previousPrice,
        stock,
        image1,
        image2,
        sizes,
        isBestSeller,
        skinTones,
        ageRange
    });

    try {
    createdProduct.save();
    }
    catch(err){
        const error = new HttpError('Creating product failed, please try again.', 500);
        return next(error);
    }

    res.status(201).json({
        product: createdProduct
    });
}
exports.updateProduct = async (req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }

    const { name, category, kind, color, colorCode, description, fabricSpecifications,
            currentPrice, previousPrice, stock,
            image1, image2, sizes, isBestSeller, skinTones, ageRange } = req.body;

    const productId = req.params.pid;

    let product;

    try{
        product = await Product.findById(productId);
    }
    catch(err){
        const error = new HttpError('Something went wrong, could not find a product.', 500);
        return next(error);
    }

    product.name = name;
    product.category = category;
    product.kind = kind;
    product.color = color;
    product.colorCode = colorCode;
    product.description = description;
    product.fabricSpecifications = fabricSpecifications;
    product.currentPrice = currentPrice;
    product.previousPrice = previousPrice;
    product.stock = stock;
    product.image1 = image1;
    product.image2 = image2;
    product.sizes = sizes;
    product.isBestSeller = isBestSeller;
    product.skinTones = skinTones;
    product.ageRange = ageRange;

    try{
        await product.save();
    }
    catch(err){
        const error = new HttpError('Something went wrong, could not update product.', 500);
        return next(error);
    }

    res.status(200).json({product: product.toObject({ getters: true })});
}

exports.deleteProduct = async (req, res, next) =>{
    const productId = req.params.pid;

    let product;

    try{
        product = await Product.findById(productId);
    }
    catch(err){
        const error = new HttpError('Something went wrong, could not find a product.', 500);
        return next(error);
    }
    
    try{
      await product.remove();
    }
    catch(err){
        const error = new HttpError('Something went wrong, could not delete product.', 500);
        return next(error);
    }

    res.status(200).json({message: 'Deleted Product'});
}

exports.getCart = async (req, res, next) => {
    // If user is authenticated, use their cart
    if (req.userData && req.userData.userId) {
        try {
            const user = await User.findById(req.userData.userId).populate('cart.items.productId');
            if (!user) {
                return next(new HttpError('User not found.', 404));
            }
            return res.status(200).json({ cart: user.cart });
        } catch (err) {
            return next(new HttpError('Fetching cart failed, please try again.', 500));
        }
    }
    // Guest cart logic
    let sessionId = req.cookies.sessionId;
    if (!sessionId) {
        sessionId = uuidv4();
        res.cookie('sessionId', sessionId, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }); // 1 week
    }
    if (!guestCarts[sessionId]) {
        guestCarts[sessionId] = {
            items: [],
            totalPriceOfAllProducts: 0,
            totalQuantity: 0
        };
    }
    return res.status(200).json({ cart: guestCarts[sessionId] });
};

exports.updateCart = async (req, res, next) => {
    // Authenticated user
    if (req.userData && req.userData.userId) {
        const userId = req.userData.userId;
        const { products, totalPriceOfAllProducts, totalQuantity } = req.body;
        try {
            const user = await User.findById(userId);
            if (!user) {
                return next(new HttpError('User not found.', 404));
            }
            // Update the entire cart
            user.cart = {
                items: products.map(product => ({
                    productId: product.id,
                    quantity: product.quantity
                })),
                totalPriceOfAllProducts,
                totalQuantity
            };
            await user.save();
            return res.status(200).json({ message: 'Cart updated successfully' });
        } catch (err) {
            return next(new HttpError('Updating cart failed, please try again.', 500));
        }
    }
    // Guest cart logic
    let sessionId = req.cookies.sessionId;
    if (!sessionId) {
        sessionId = uuidv4();
        res.cookie('sessionId', sessionId, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
    }
    const { products, totalPriceOfAllProducts, totalQuantity } = req.body;
    guestCarts[sessionId] = {
        items: (products || []).map(product => ({
            productId: product.id,
            quantity: product.quantity
        })),
        totalPriceOfAllProducts: totalPriceOfAllProducts || 0,
        totalQuantity: totalQuantity || 0
    };
    return res.status(200).json({ message: 'Guest cart updated successfully' });
};

exports.getOrders = async (req, res, next) => {
    const userId = req.userData.userId;

    try {
        const orders = await Order.find({ 'user.userId': userId }).populate('items.productId');
        res.status(200).json({ orders });
    } catch (err) {
        return next(new HttpError('Fetching orders failed, please try again.', 500));
    }
};

exports.postOrder = async (req, res, next) => {
    const userId = req.userData.userId;

    try {
        const user = await User.findById(userId).populate('cart.items.productId');
        if (!user) {
            return next(new HttpError('User not found.', 404));
        }

        if (user.cart.items.length === 0) {
            return next(new HttpError('Cart is empty.', 400));
        }

        const totalAmount = user.cart.items.reduce((total, item) => {
            return total + (item.productId.currentPrice * item.quantity);
        }, 0);

        const order = new Order({
            user: {
                userId: user._id,
                email: user.email
            },
            items: user.cart.items.map(item => ({
                productId: item.productId._id,
                quantity: item.quantity
            })),
            totalAmount
        });

        await order.save();
        
        // Clear the user's cart
        user.cart.items = [];
        await user.save();

        res.status(201).json({ order });
    } catch (err) {
        return next(new HttpError('Creating order failed, please try again.', 500));
    }
};