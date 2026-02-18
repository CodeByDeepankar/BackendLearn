// ============================================
// PRODUCT CONTROLLER - Business Logic Layer
// Handles route logic and HTTP responses
// ============================================

const Product = require('../models/Product');

/**
 * GET /api/products - Get all products
 * Query params: category, minPrice, maxPrice, inStock, limit, skip
 */
const getAllProducts = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, inStock, limit = 10, skip = 0 } = req.query;
        
        // Build filter object
        const filter = {};
        if (category) filter.category = category;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }
        if (inStock !== undefined) {
            filter.inStock = inStock === 'true';
        }
        
        const products = await Product.find(filter)
            .limit(Number(limit))
            .skip(Number(skip))
            .sort({ createdAt: -1 });
        
        const total = await Product.countDocuments(filter);
        
        res.status(200).json({
            success: true,
            count: products.length,
            total,
            pagination: { limit: Number(limit), skip: Number(skip) },
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch products',
            details: error.message
        });
    }
};

/**
 * GET /api/products/:id - Get product by ID
 */
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                error: `Product with id ${req.params.id} not found`
            });
        }
        
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                error: 'Invalid product ID format'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Failed to fetch product',
            details: error.message
        });
    }
};

/**
 * POST /api/products - Create new product
 */
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: product
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: messages
            });
        }
        res.status(500).json({
            success: false,
            error: 'Failed to create product',
            details: error.message
        });
    }
};

/**
 * PUT /api/products/:id - Update product
 */
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { 
                new: true, // Return updated document
                runValidators: true // Run schema validation
            }
        );
        
        if (!product) {
            return res.status(404).json({
                success: false,
                error: `Product with id ${req.params.id} not found`
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: product
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                error: 'Invalid product ID format'
            });
        }
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: messages
            });
        }
        res.status(500).json({
            success: false,
            error: 'Failed to update product',
            details: error.message
        });
    }
};

/**
 * DELETE /api/products/:id - Delete product
 */
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                error: `Product with id ${req.params.id} not found`
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                error: 'Invalid product ID format'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Failed to delete product',
            details: error.message
        });
    }
};

/**
 * GET /api/products/low-stock - Get low stock products
 */
const getLowStockProducts = async (req, res) => {
    try {
        const products = await Product.findLowStock();
        
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch low stock products',
            details: error.message
        });
    }
};

/**
 * GET /api/products/category/:category - Get products by category
 */
const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.findByCategory(req.params.category);
        
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch products by category',
            details: error.message
        });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getLowStockProducts,
    getProductsByCategory
};
