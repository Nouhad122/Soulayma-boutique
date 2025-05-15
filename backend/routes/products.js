const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const checkAuth = require('../middleware/check-auth');

const productsController = require('../controllers/products');

// Public routes
router.get('/products', productsController.getProducts);
router.get('/products/:pid', productsController.getProductById);

// Cart routes - check for authentication, fallback to guest if not authenticated
router.get('/cart', checkAuth, productsController.getCart);
router.put('/cart', checkAuth, productsController.updateCart);

// Protected routes
router.use(checkAuth);

router.post('/products', 
    [
        body('name')
        .not()
        .isEmpty(),
        body('category')
        .not()
        .isEmpty(),
        body('kind')
        .not()
        .isEmpty(),
        body('color')
        .not()
        .isEmpty(),
        body('colorCode')
        .not()
        .isEmpty(),
        body('description').isLength({ min: 5}),
        body('fabricSpecifications')
        .not()
        .isEmpty(),
        body('productInfo1')
        .not()
        .isEmpty(),
        body('currentPrice')
        .isNumeric()
        .isFloat({ min: 0 }),
        body('previousPrice')
        .optional()
        .isNumeric()
        .isFloat({ min: 0 }),
        body('stock')
        .isNumeric(),
        body('image1')
        .not()
        .isEmpty(),
        body('image2')
        .not()
        .isEmpty(),
        body('sizes')
        .isArray()
        .notEmpty(),
        body('skinTones')
        .isArray()
        .notEmpty()
    ]
    , productsController.createProduct);

router.patch('/products/:pid',
    [
        body('name')
        .not()
        .isEmpty(),
        body('category')
        .not()
        .isEmpty(),
        body('kind')
        .not()
        .isEmpty(),
        body('color')
        .not()
        .isEmpty(),
        body('colorCode')
        .not()
        .isEmpty(),
        body('description').isLength({ min: 5}),
        body('fabricSpecifications')
        .not()
        .isEmpty(),
        body('productInfo1')
        .not()
        .isEmpty(),
        body('currentPrice')
        .isNumeric()
        .isFloat({ min: 0 }),
        body('previousPrice')
        .optional()
        .isNumeric()
        .isFloat({ min: 0 }),
        body('stock')
        .isNumeric(),
        body('image1')
        .not()
        .isEmpty(),
        body('image2')
        .not()
        .isEmpty(),
        body('sizes')
        .isArray()
        .notEmpty(),
        body('skinTones')
        .isArray()
        .notEmpty()
    ],
     productsController.updateProduct);

router.delete('/products/:pid', productsController.deleteProduct);

module.exports = router;