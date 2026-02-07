// ============================================
// SERVER.JS - Application Entry Point
// Starts the Express server
// ============================================

const app = require('./src/app');
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET    /products      - List all products');
    console.log('  GET    /products/:id  - Get product by ID');
    console.log('  POST   /products      - Create product');
    console.log('  PUT    /products/:id  - Update product');
    console.log('  DELETE /products/:id  - Delete product');
});
