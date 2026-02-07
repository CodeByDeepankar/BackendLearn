# BackendLearn 🚀

My backend development learning journey - one day at a time.

## 📅 Streak

| Day | Topic | Status |
|-----|-------|--------|
| Day 1 | REST API with Express | ✅ Complete |
| Day 2 | - | 🔜 In Progress |

---

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **REST API** - Architecture style

---

## 📁 Project Structure

```
Day1/
├── server.js              # Entry point
├── package.json
└── src/
    ├── app.js             # Express configuration
    ├── models/
    │   └── productModel.js    # Data layer
    ├── controllers/
    │   └── productController.js # Business logic
    ├── routes/
    │   ├── index.js
    │   └── productRoutes.js    # API endpoints
    └── middleware/
        ├── validation.js       # Input validation
        └── errorHandler.js     # Error handling
```

---

## 📚 Concepts Learned (Day 1)

### Core Concepts

- ✅ **CRUD Operations** - Create, Read, Update, Delete
- ✅ **HTTP Status Codes** - 200, 201, 400, 404, 500
- ✅ **Request Validation** - Middleware for input checking
- ✅ **Error Handling** - Global error handlers, 404 routes
- ✅ **RESTful Routes** - Proper URL patterns and HTTP methods

### Architecture Patterns

- **MVC Pattern** - Model, View (Controller), Routes
- **Middleware Pattern** - Reusable validation and error logic
- **Layered Architecture** - Routes → Controllers → Models

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

---

## 🚀 How to Run

```bash
cd Day1
npm install
npm start
```

Server runs at: `http://localhost:3000`

---

## 📖 Resources Used

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Best Practices](https://restfulapi.net/)

---

*Started: 2026-02-07*
*Status: Learning daily*
