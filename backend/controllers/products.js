const { v4: uuidv4 } = require('uuid');

let DUMMY_PRODUCTS = [
    {
        id: "1",
        name: 'Premium Hijab',
        category: 'hijab',
        kind: 'Premium Hijab',
        color: 'black',
        colorCode: '#000',
        description: 'black hijab, it is perfect',
        fabricSpecifications: 'any',
        productInfo1: 'any',
        productInfo2: 'any',
        productInfo3: 'any',
        currentPrice: 43,
        previousPrice: 55,
        stock: 4,
        image1: 'https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?uid=R98532552&ga=GA1.1.427665853.1740759567&semt=ais_hybrid&w=740',
        image2: 'https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?uid=R98532552&ga=GA1.1.427665853.1740759567&semt=ais_hybrid&w=740',
        sizes: ['L', 'XL'],
        isBestSeller: true,
        skinTones: ['Fair', 'golden_tan']
    },
    {
        id: "2",
        name: 'Premium Hijab',
        category: 'hijab',
        kind: 'Premium Hijab',
        color: 'red',
        colorCode: '#000',
        description: 'black hijab, it is perfect',
        fabricSpecifications: 'any',
        productInfo1: 'any',
        productInfo2: 'any',
        productInfo3: '',
        currentPrice: 43,
        previousPrice: 55,
        stock: 4,
        image1: 'https://img.freepik.com/free-psd/books-stacked-isolated-transparent-background_191095-17333.jpg?uid=R98532552&ga=GA1.1.427665853.1740759567&semt=ais_hybrid&w=740',
        image2: 'https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?uid=R98532552&ga=GA1.1.427665853.1740759567&semt=ais_hybrid&w=740',
        sizes: ['L', 'XL'],
        isBestSeller: true,
        skinTones: ['Fair', 'golden_tan']
    }
    
];

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        products: DUMMY_PRODUCTS
    });
}

exports.getProductById = (req, res, next) => {
    const productId = req.params.pid;
    const product = DUMMY_PRODUCTS.find(p => {
         return p.id === productId
    });
    
    if(!product){
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ product: product });

}

exports.createProduct = (req, res, next) => {
    const { name, category, kind, color, colorCode, description, fabricSpecifications,
            productInfo1, productInfo2, productInfo3, currentPrice, previousPrice, stock,
            image1, image2, sizes, isBestSeller, skinTones } = req.body;

    const createdProduct = {
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
        skinTones
    };

    DUMMY_PRODUCTS.push(createdProduct);

    res.status(201).json({
        product: createdProduct
    });
}
exports.updateProduct = (req, res, next) =>{
    const { name, category, kind, color, colorCode, description, fabricSpecifications,
            currentPrice, previousPrice, stock,
            image1, image2, sizes, isBestSeller, skinTones } = req.body;

    const productId = req.params.pid;

    const updatedProduct = {...DUMMY_PRODUCTS.find(p =>  p.id === productId)};
    
    const productIndex = DUMMY_PRODUCTS.findIndex(p => p.id === productId);

    updatedProduct.name = name;
    updatedProduct.category = category;
    updatedProduct.kind = kind;
    updatedProduct.colorCode = colorCode;
    updatedProduct.description = description;
    updatedProduct.fabricSpecifications = fabricSpecifications;
    updatedProduct.currentPrice = currentPrice;
    updatedProduct.previousPrice = previousPrice;
    updatedProduct.stock = stock;
    updatedProduct.image1 = image1;
    updatedProduct.image2 = image2;
    updatedProduct.sizes = sizes;
    updatedProduct.isBestSeller = isBestSeller;
    updatedProduct.skinTones = skinTones;

    DUMMY_PRODUCTS[productIndex] = updatedProduct;

    res.status(200).json({product: updatedProduct});
}

exports.deleteProduct = (req, res, next) =>{
    const productId = req.params.pid;

    DUMMY_PRODUCTS = DUMMY_PRODUCTS.filter(p => p.id === productId);

    res.status(200).json({message: 'Deleted Product'});
}