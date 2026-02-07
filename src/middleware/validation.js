// ============================================
// VALIDATION MIDDLEWARE
// Reusable validation functions for request data
// ============================================

/**
 * Validate product creation/update data
 * @param {object} data - Request body
 * @returns {string|null} Error message or null if valid
 */
const validateProduct = (data) => {
    // Name validation
    if (!data.name) {
        return 'Name is required';
    }
    if (typeof data.name !== 'string') {
        return 'Name must be a string';
    }
    if (data.name.length < 2) {
        return 'Name must be at least 2 characters';
    }
    
    // Price validation
    if (data.price === undefined || data.price === null) {
        return 'Price is required';
    }
    if (typeof data.price !== 'number') {
        return 'Price must be a number';
    }
    if (data.price < 0) {
        return 'Price must be positive';
    }
    
    // Category validation (optional)
    if (data.category !== undefined && typeof data.category !== 'string') {
        return 'Category must be a string';
    }
    
    return null;  // Valid
};

/**
 * Middleware factory - creates validation middleware
 * @param {function} validator - Validation function
 * @returns {function} Express middleware
 */
const validate = (validator) => {
    return (req, res, next) => {
        const error = validator(req.body);
        
        if (error) {
            // 400 = Bad Request - Invalid input from client
            return res.status(400).json({
                success: false,
                error: error
            });
        }
        
        // Validation passed, continue to controller
        next();
    };
};

module.exports = {
    validateProduct,
    validate
};
