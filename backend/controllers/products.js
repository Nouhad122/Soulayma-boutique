const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');
const Product = require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');

// In-memory guest cart store (for demo; use DB for production)
const guestCarts = {};

function calculateCartTotals(items) {
    let totalPriceOfAllProducts = 0;
    let totalQuantity = 0;
    const products = items.map(item => {
        const product = item.productId;
        const price = Number(product.currentPrice || 0);
        const quantity = Number(item.quantity || 0);
        totalQuantity += quantity;
        totalPriceOfAllProducts += price * quantity;
        return {
            id: product._id || product,
            title: product.name || 'Product',
            image1: product.image1 || '',
            price,
            quantity,
            totalPrice: price * quantity
        };
    });
    return { products, totalPriceOfAllProducts, totalQuantity };
}

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

exports.createProduct = async (req, res, next) => {
    console.log('BODY:', req.body);
    console.log('FILES:', req.files);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation errors:', errors.array());
        return next(new HttpError('Invalid inputs passed, please check your data.', 422));
    }

    // Ensure image1 is present
    if (!req.files || !req.files.image1 || req.files.image1.length === 0) {
        return next(new HttpError('Image1 is required.', 422));
    }

    try {
        // Parse arrays and convert types
        const sizes = typeof req.body.sizes === 'string' ? JSON.parse(req.body.sizes) : req.body.sizes;
        const skinTones = typeof req.body.skinTones === 'string' ? JSON.parse(req.body.skinTones) : req.body.skinTones;
        const isBestSeller = req.body.isBestSeller === 'true' || req.body.isBestSeller === true;
        const currentPrice = Number(req.body.currentPrice);
        const previousPrice = req.body.previousPrice ? Number(req.body.previousPrice) : undefined;
        const stock = Number(req.body.stock);

        const createdProduct = new Product({
            name: req.body.name,
            category: req.body.category,
            kind: req.body.kind,
            color: req.body.color,
            colorCode: req.body.colorCode,
            description: req.body.description,
            fabricSpecifications: req.body.fabricSpecifications,
            productInfo1: req.body.productInfo1,
            productInfo2: req.body.productInfo2,
            productInfo3: req.body.productInfo3,
            currentPrice,
            previousPrice,
            stock,
            image1: req.files?.image1?.[0]?.filename,
            image2: req.files?.image2?.[0]?.filename,
            sizes,
            isBestSeller,
            skinTones
        });

        await createdProduct.save();
        res.status(201).json({ product: createdProduct });
    } catch (err) {
        return next(new HttpError('Creating product failed, please try again.', 500));
    }
};

exports.updateProduct = async (req, res, next) =>{
    console.log('UPDATE BODY:', req.body);
    console.log('UPDATE FILES:', req.files);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation errors:', errors.array());
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }

    try {
        // Parse arrays and convert types
        const sizes = typeof req.body.sizes === 'string' ? JSON.parse(req.body.sizes) : req.body.sizes;
        const skinTones = typeof req.body.skinTones === 'string' ? JSON.parse(req.body.skinTones) : req.body.skinTones;
        const isBestSeller = req.body.isBestSeller === 'true' || req.body.isBestSeller === true;
        const currentPrice = Number(req.body.currentPrice);
        const previousPrice = req.body.previousPrice ? Number(req.body.previousPrice) : undefined;
        const stock = Number(req.body.stock);

        const productId = req.params.pid;
        let product = await Product.findById(productId);
        if (!product) {
            throw new HttpError('Product not found.', 404);
        }

        product.name = req.body.name;
        product.category = req.body.category;
        product.kind = req.body.kind;
        product.color = req.body.color;
        product.colorCode = req.body.colorCode;
        product.description = req.body.description;
        product.fabricSpecifications = req.body.fabricSpecifications;
        product.productInfo1 = req.body.productInfo1;
        product.productInfo2 = req.body.productInfo2;
        product.productInfo3 = req.body.productInfo3;
        product.currentPrice = currentPrice;
        product.previousPrice = previousPrice;
        product.stock = stock;
        product.sizes = sizes;
        product.isBestSeller = isBestSeller;
        product.skinTones = skinTones;

        // Handle images: if new file uploaded, use it; else, keep old filename
        if (req.files && req.files.image1 && req.files.image1.length > 0) {
            product.image1 = req.files.image1[0].filename;
        } else if (req.body.image1) {
            product.image1 = req.body.image1;
        }
        if (req.files && req.files.image2 && req.files.image2.length > 0) {
            product.image2 = req.files.image2[0].filename;
        } else if (req.body.image2) {
            product.image2 = req.body.image2;
        }

        await product.save();
        res.status(200).json({product: product.toObject({ getters: true })});
    } catch (err) {
        console.error('Update product error:', err);
        return next(new HttpError('Something went wrong, could not update product.', 500));
    }
};

exports.deleteProduct = async (req, res, next) => {
    const productId = req.params.pid;

    let product;
    try {
        // Try to find by _id (MongoDB ObjectId)
        product = await Product.findById(productId);
        // If not found, try to find by custom id field (UUID)
        if (!product) {
            product = await Product.findOne({ id: productId });
        }
    } catch (err) {
        console.error('Find product error:', err);
        return next(new HttpError('Something went wrong, could not find a product.', 500));
    }

    if (!product) {
        return next(new HttpError('Product not found.', 404));
    }

    // Remove product from all user carts
    try {
        await User.updateMany(
            {},
            { $pull: { 'cart.items': { productId: product._id } } }
        );
    } catch (err) {
        console.error('Remove from carts error:', err);
        return next(new HttpError('Failed to remove product from user carts.', 500));
    }

    try {
        await Product.deleteOne({ _id: product._id });
    } catch (err) {
        console.error('Product delete error:', err);
        return next(new HttpError('Something went wrong, could not delete product.', 500));
    }

    res.status(200).json({ message: 'Deleted Product' });
};

exports.getCart = async (req, res, next) => {
    if (req.userData && req.userData.userId) {
        try {
            const user = await User.findById(req.userData.userId).populate('cart.items.productId');
            if (!user) return next(new HttpError('User not found.', 404));
            const { products, totalPriceOfAllProducts, totalQuantity } = calculateCartTotals(user.cart.items);
            return res.status(200).json({ cart: { products, totalPriceOfAllProducts, totalQuantity } });
        } catch (err) {
            return next(new HttpError('Fetching cart failed, please try again.', 500));
        }
    }
    // Guest cart logic
    let sessionId = req.cookies.sessionId;
    if (!sessionId) {
        sessionId = uuidv4();
        res.cookie('sessionId', sessionId, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
    }
    if (!guestCarts[sessionId]) {
        guestCarts[sessionId] = { items: [] };
    }
    // For guests, populate product data manually
    const items = guestCarts[sessionId].items;
    const populatedItems = await Promise.all(items.map(async item => {
        const product = await Product.findById(item.productId);
        return { productId: product, quantity: item.quantity };
    }));
    const { products, totalPriceOfAllProducts, totalQuantity } = calculateCartTotals(populatedItems);
    return res.status(200).json({ cart: { products, totalPriceOfAllProducts, totalQuantity } });
};

exports.updateCart = async (req, res, next) => {
    const { products } = req.body;
    if (!Array.isArray(products)) {
        return next(new HttpError('Invalid cart data', 400));
    }
    if (req.userData && req.userData.userId) {
        try {
            const user = await User.findById(req.userData.userId);
            if (!user) return next(new HttpError('User not found.', 404));
            user.cart.items = products.map(product => ({
                productId: product.id,
                quantity: Number(product.quantity)
            }));
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
    guestCarts[sessionId] = {
        items: products.map(product => ({
            productId: product.id,
            quantity: Number(product.quantity)
        }))
    };
    return res.status(200).json({ message: 'Guest cart updated successfully' });
};

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ 'user.userId': req.userData.userId })
            .populate('items.productId')
            .sort({ createdAt: -1 });

        res.json({ orders });
    } catch (err) {
        const error = new HttpError('Fetching orders failed, please try again later.', 500);
        return next(error);
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

exports.createOrder = async (req, res, next) => {
    try {
        const { items, totalAmount } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return next(new HttpError('Invalid items data.', 422));
        }

        if (!totalAmount || totalAmount <= 0) {
            return next(new HttpError('Invalid total amount.', 422));
        }

        // Fetch user from DB to get email
        const user = await User.findById(req.userData.userId);
        if (!user) {
            return next(new HttpError('User not found.', 404));
        }

        const createdOrder = new Order({
            user: {
                userId: user._id,
                email: user.email
            },
            items,
            totalAmount,
            status: 'pending'
        });

        await createdOrder.save();

        // Clear the user's cart after successful order
        user.cart.items = [];
        await user.save();

        res.status(201).json({ order: createdOrder });
    } catch (err) {
        console.log(err); // Log the real error
        const error = new HttpError('Creating order failed, please try again.', 500);
        return next(error);
    }
};

exports.getOrderById = async (req, res, next) => {
    try {
        const orderId = req.params.oid;
        const order = await Order.findById(orderId).populate('items.productId');

        if (!order) {
            return next(new HttpError('Could not find order for the provided id.', 404));
        }

        // Check if the order belongs to the authenticated user
        if (order.user.userId.toString() !== req.userData.userId) {
            return next(new HttpError('You are not authorized to view this order.', 403));
        }

        res.json({ order });
    } catch (err) {
        const error = new HttpError('Something went wrong, could not find order.', 500);
        return next(error);
    }
};

exports.getOrderCount = async (req, res, next) => {
    try {
        const count = await Order.countDocuments();
        res.json({ count });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch order count' });
    }
};

exports.getAllOrders = async (req, res, next) => {
    try {
        console.log('Fetching all orders...');
        const orders = await Order.find();
        console.log('Orders found:', orders);
        res.json({ orders });
    } catch (err) {
        console.log('Error in getAllOrders:', err);
        res.status(500).json({ message: 'Failed to fetch all orders' });
    }
};

exports.deleteOrder = async (req, res, next) => {
    const orderId = req.params.oid;

    try {
        const order = await Order.findById(orderId);
        
        if (!order) {
            return next(new HttpError('Order not found.', 404));
        }

        await Order.findByIdAndDelete(orderId);
        
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        console.error('Error deleting order:', err);
        return next(new HttpError('Something went wrong, could not delete order.', 500));
    }
};