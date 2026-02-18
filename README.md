# BackendLearn 🚀

My backend development learning journey - one day at a time.

## 📅 Streak

| Day | Topic | Status |
|-----|-------|--------|
| Day 1 | REST API with Express | ✅ Complete |
| Day 2 | Database Integration with MongoDB & Mongoose | ✅ Complete |
| Day 3 | - | 🔜 Coming Soon |

---

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **REST API** - Architecture style

---

## 📁 Project Structure

```
BackendLearn/
├── Day1/                        # In-memory data storage
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── models/
│       ├── controllers/
│       ├── routes/
│       └── middleware/
│
└── Day2/                        # MongoDB + Mongoose
    ├── server.js
    ├── package.json
    ├── .env.example
    └── src/
        ├── app.js
        ├── config/
        ├── models/
        ├── controllers/
        ├── routes/
        └── middleware/
```

---

## 📚 Concepts Learned

### Day 1: REST API with Express

**Core Concepts**
- ✅ **CRUD Operations** - Create, Read, Update, Delete
- ✅ **HTTP Status Codes** - 200, 201, 400, 404, 500
- ✅ **Request Validation** - Middleware for input checking
- ✅ **Error Handling** - Global error handlers, 404 routes
- ✅ **RESTful Routes** - Proper URL patterns and HTTP methods

**Architecture Patterns**
- **MVC Pattern** - Model, View (Controller), Routes
- **Middleware Pattern** - Reusable validation and error logic
- **Layered Architecture** - Routes → Controllers → Models

### Day 2: Database Integration with MongoDB & Mongoose

**Core Concepts**
- ✅ **MongoDB Connection** - Connecting Express to MongoDB
- ✅ **Mongoose Schemas** - Defining data structure with validation
- ✅ **Mongoose Models** - CRUD operations with database
- ✅ **Schema Validation** - Built-in validation rules
- ✅ **Query Filtering** - Advanced search with query params
- ✅ **Indexes** - Optimizing database queries
- ✅ **Virtual Properties** - Computed fields
- ✅ **Middleware Hooks** - Pre-save, post-save operations
- ✅ **Static Methods** - Model-level utility functions
- ✅ **Instance Methods** - Document-level methods

**New Architecture Patterns**
- **ODM (Object Document Mapper)** - Mongoose abstraction
- **Connection Management** - Graceful shutdown handling
- **Environment Configuration** - Using .env for secrets
- **Async/Await** - Modern JavaScript for database operations

---

## 🔗 API Endpoints

### Day 1 Endpoints (In-Memory)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

### Day 2 Endpoints (MongoDB)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (with filtering) |
| GET | `/api/products/low-stock` | Get low stock products |
| GET | `/api/products/category/:category` | Get products by category |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/health` | Health check endpoint |

**Query Parameters for GET /api/products:**
- `category` - Filter by category (electronics, clothing, books, home, sports, other)
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `inStock` - Filter by stock availability (true/false)
- `limit` - Number of results (default: 10)
- `skip` - Pagination offset (default: 0)

---

## 🚀 How to Run

### Day 1 (In-Memory)

```bash
cd Day1
npm install
npm start
```

Server runs at: `http://localhost:3000`

### Day 2 (MongoDB)

**Prerequisites:**
- MongoDB installed locally OR MongoDB Atlas account
- Node.js 18+

**Setup:**

```bash
cd Day2
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB connection string
# For local: MONGODB_URI=mongodb://localhost:27017/backendlearn_day2
# For Atlas: MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/backendlearn_day2

npm start
# Or for development with auto-reload:
npm run dev
```

Server runs at: `http://localhost:3000`

---

## 📝 Example API Requests

### Create a Product (Day 2)

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Headphones",
    "description": "High-quality wireless headphones with noise cancellation",
    "price": 99,
    "quantity": 50,
    "category": "electronics"
  }'
```

### Get Products with Filtering

```bash
# Get all electronics under $100
curl "http://localhost:3000/api/products?category=electronics&maxPrice=100"

# Get only in-stock items
curl "http://localhost:3000/api/products?inStock=true&limit=5"

# Get low stock products
curl "http://localhost:3000/api/products/low-stock"
```

---

## 📖 Resources Used

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Best Practices](https://restfulapi.net/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

---

*Started: 2026-02-07*
*Status: Learning daily* 📚
