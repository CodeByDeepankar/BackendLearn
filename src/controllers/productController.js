// ============================================
// PRODUCT CONTROLLER - Business Logic Layer
// Handles route logic and HTTP responses
// ============================================

const productModel = require('../models/productModel');

/**
 * GET /products - Get all products
 */
const getAllProducts = (req, res) => {
    const products = productModel.getAllProducts();
    
    // 200 = OK - Successfully retrieved data
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
};

/**
 * GET /products/:id - Get product by ID
 */
const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = productModel.getProductById(id);
    
    if (!product) {
        // 404 = Not Found - Resource doesn't exist
        return res.status(404).json({
            success: false,
            error: `Product with id ${id} not found`
        });
    }
    
    // 200 = OK - Successfully found
    res.status(200).json({
        success: true,
        data: product
    });
};

/**
 * POST /products - Create new product
 */
const createProduct = (req, res) => {
    // Note: Validation already done by middleware
    const newProduct = productModel.createProduct(req.body);
    
    // 201 = Created - New resource successfully created
    res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: newProduct
    });
};

/**
 * PUT /products/:id - Update product
 */
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = productModel.updateProduct(id, req.body);
    
    if (!product) {
        // 404 = Not Found
        return res.status(404).json({
            success: false,
            error: `Product with id ${id} not found`
        });
    }
    
    // 200 = OK - Successfully updated
    res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: product
    });
};

/**
 * DELETE /products/:id - Delete product
 */
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = productModel.deleteProduct(id);
    
    if (!deleted) {
        // 404 = Not Found
        return res.status(404).json({
            success: false,
            error: `Product with id ${id} not found`
        });
    }
    
    // 200 = OK - Successfully deleted
    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
