// ============================================
// PRODUCT ROUTES - API Endpoints
// Maps HTTP requests to controller functions
// ============================================

const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getLowStockProducts,
    getProductsByCategory
} = require('../controllers/productController');

// Validation middleware
const validateProduct = (req, res, next) => {
    const { name, description, price, category } = req.body;
    const errors = [];
    
    if (!name || name.trim().length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    if (!description || description.trim().length < 10) {
        errors.push('Description must be at least 10 characters');
    }
    if (price === undefined || price < 0) {
        errors.push('Price must be a non-negative number');
    }
    if (!category) {
        errors.push('Category is required');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: errors
        });
    }
    
    next();
};

// GET /api/products - Get all products (with filtering)
router.get('/', getAllProducts);

// GET /api/products/low-stock - Get low stock products
router.get('/low-stock', getLowStockProducts);

// GET /api/products/category/:category - Get products by category
router.get('/category/:category', getProductsByCategory);

// GET /api/products/:id - Get product by ID
router.get('/:id', getProductById);

// POST /api/products - Create new product
router.post('/', validateProduct, createProduct);

// PUT /api/products/:id - Update product
router.put('/:id', validateProduct, updateProduct);

// DELETE /api/products/:id - Delete product
router.delete('/:id', deleteProduct);

module.exports = router;
