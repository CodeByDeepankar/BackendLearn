// ============================================
// APP.JS - Express Application Setup
// Configures middleware and mounts routes
// ============================================

const express = require('express');
const app = express();

// ============================================
// MIDDLEWARE
// ============================================

// Parse JSON request bodies
// Required to access req.body in POST/PUT requests
app.use(express.json());

// ============================================
// ROUTES
// ============================================

// Mount product routes at /products
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// ============================================
// ERROR HANDLING
// ============================================

const { notFound, errorHandler } = require('./middleware/errorHandler');

// 404 handler for undefined routes
app.use(notFound);

// Global error handler
app.use(errorHandler);

module.exports = app;
