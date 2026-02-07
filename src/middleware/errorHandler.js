// ============================================
// ERROR HANDLING MIDDLEWARE
// Catches and handles errors globally
// ============================================

/**
 * 404 Not Found Handler
 * Catches requests to undefined routes
 */
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        error: `Route ${req.method} ${req.originalUrl} not found`
    });
};

/**
 * Global Error Handler
 * Catches all unhandled errors
 * @param {Error} err - Error object
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - Next middleware
 */
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    
    // 500 = Internal Server Error (unexpected errors)
    res.status(500).json({
        success: false,
        error: 'Internal Server Error'
    });
};

module.exports = {
    notFound,
    errorHandler
};
