// ============================================
// PRODUCT MODEL - Data Layer
// Handles data storage and business logic
// ============================================

// In-memory database
let products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Book', price: 19.99, category: 'Education' }
];
let nextId = 3;

/**
 * Get all products
 */
const getAllProducts = () => {
    return products;
};

/**
 * Get product by ID
 * @param {number} id - Product ID
 * @returns {object|undefined} Product or undefined if not found
 */
const getProductById = (id) => {
    return products.find(p => p.id === id);
};

/**
 * Create new product
 * @param {object} data - Product data
 * @returns {object} Created product
 */
const createProduct = (data) => {
    const newProduct = {
        id: nextId++,
        name: data.name,
        price: data.price,
        category: data.category || 'General'
    };
    products.push(newProduct);
    return newProduct;
};

/**
 * Update product
 * @param {number} id - Product ID
 * @param {object} data - Updated fields
 * @returns {object|undefined} Updated product or undefined if not found
 */
const updateProduct = (id, data) => {
    const product = products.find(p => p.id === id);
    if (!product) return undefined;
    
    // Partial update - only update fields provided
    if (data.name) product.name = data.name;
    if (typeof data.price === 'number') product.price = data.price;
    if (data.category) product.category = data.category;
    
    return product;
};

/**
 * Delete product
 * @param {number} id - Product ID
 * @returns {boolean} True if deleted, false if not found
 */
const deleteProduct = (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    products.splice(index, 1);
    return true;
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
