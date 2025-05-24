const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/products');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Public routes
router.get('/products', productsController.getProducts);
router.get('/products/:pid', productsController.getProductById);

// Cart routes - check for authentication, fallback to guest if not authenticated
router.get('/cart', checkAuth, productsController.getCart);
router.put('/cart', checkAuth, productsController.updateCart);

// Protected routes
router.use(checkAuth);

// Order routes
router.post('/orders',
    [
        body('items')
            .isArray()
            .withMessage('Items must be an array')
            .notEmpty()
            .withMessage('Items array cannot be empty'),
        body('items.*.productId')
            .notEmpty()
            .withMessage('Product ID is required'),
        body('items.*.quantity')
            .isInt({ min: 1 })
            .withMessage('Quantity must be at least 1'),
        body('totalAmount')
            .isFloat({ min: 0 })
            .withMessage('Total amount must be a positive number')
    ],
    productsController.createOrder
);

router.get('/orders', productsController.getOrders);
router.get('/orders/all', productsController.getAllOrders);
router.get('/orders/:oid', productsController.getOrderById);
router.get('/orders/count', productsController.getOrderCount);

// Product management routes
router.post('/products', 
    upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),
    [
        body('name').not().isEmpty(),
        body('category').not().isEmpty(),
        body('kind').not().isEmpty(),
        body('color').not().isEmpty(),
        body('colorCode').not().isEmpty(),
        body('description').isLength({ min: 5}),
        body('fabricSpecifications').not().isEmpty(),
        body('productInfo1').not().isEmpty(),
        body('currentPrice').isNumeric().isFloat({ min: 0 }),
        body('previousPrice').optional().isNumeric().isFloat({ min: 0 }),
        body('stock').isNumeric(),
        body('sizes').notEmpty(),
        body('skinTones').notEmpty()
    ],
    productsController.createProduct
);

router.patch('/products/:pid',
    upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),
    [
        body('name').not().isEmpty(),
        body('category').not().isEmpty(),
        body('kind').not().isEmpty(),
        body('color').not().isEmpty(),
        body('colorCode').not().isEmpty(),
        body('description').isLength({ min: 5}),
        body('fabricSpecifications').not().isEmpty(),
        body('productInfo1').not().isEmpty(),
        body('currentPrice').isNumeric().isFloat({ min: 0 }),
        body('previousPrice').optional().isNumeric().isFloat({ min: 0 }),
        body('stock').isNumeric(),
        body('sizes').notEmpty(),
        body('skinTones').notEmpty()
    ],
    productsController.updateProduct
);

router.delete('/products/:pid', productsController.deleteProduct);

module.exports = router;