// ============================================
// PRODUCT MODEL - Mongoose Schema
// Database layer with validation
// ============================================

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        minlength: [10, 'Description must be at least 10 characters'],
        maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative'],
        validate: {
            validator: Number.isInteger,
            message: 'Price must be an integer'
        }
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        min: [0, 'Quantity cannot be negative'],
        default: 0
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        trim: true,
        enum: {
            values: ['electronics', 'clothing', 'books', 'home', 'sports', 'other'],
            message: 'Invalid category. Must be one of: electronics, clothing, books, home, sports, other'
        }
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt
});

// Index for faster queries
productSchema.index({ name: 1 });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });

// Virtual: Check if product is low stock
productSchema.virtual('isLowStock').get(function() {
    return this.quantity > 0 && this.quantity < 10;
});

// Pre-save middleware: Auto-update inStock based on quantity
productSchema.pre('save', function(next) {
    if (this.quantity === 0) {
        this.inStock = false;
    } else {
        this.inStock = true;
    }
    next();
});

// Instance method: Reduce stock
productSchema.methods.reduceStock = function(amount) {
    if (this.quantity < amount) {
        throw new Error('Insufficient stock');
    }
    this.quantity -= amount;
    if (this.quantity === 0) {
        this.inStock = false;
    }
    return this.save();
};

// Static method: Find products by category
productSchema.statics.findByCategory = function(category) {
    return this.find({ category, inStock: true });
};

// Static method: Find low stock products
productSchema.statics.findLowStock = function() {
    return this.find({ quantity: { $gt: 0, $lte: 10 } });
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
