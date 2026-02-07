// ============================================
// PRODUCT ROUTES - API Endpoint Definitions
// Maps HTTP methods and URLs to controller functions
// ============================================

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validateProduct } = require('../middleware/validation');

// GET /products - Get all products
router.get('/', productController.getAllProducts);

// GET /products/:id - Get product by ID
router.get('/:id', productController.getProductById);

// POST /products - Create new product
// validateProduct is middleware that runs before the controller
router.post('/', validateProduct, productController.createProduct);

// PUT /products/:id - Update product
router.put('/:id', productController.updateProduct);

// DELETE /products/:id - Delete product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
