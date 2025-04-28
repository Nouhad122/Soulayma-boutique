const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/products', productsController.getProducts);

router.post('/products', productsController.createProduct);

router.get('/products/:pid', productsController.getProductById);

router.patch('/products/:pid', productsController.updateProduct);

router.delete('/products/:pid', productsController.deleteProduct);



module.exports = router;