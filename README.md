# Reviews API

A RESTful CRUD API for managing product reviews. Built as a WebOps induction project to learn backend development from scratch.

**Live deployment:** https://reviews-api-ct6v.onrender.com

> Note: hosted on Render's free tier. The first request after ~15 min of inactivity may take ~50 seconds while the service wakes up. Subsequent requests are fast.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Hosting:** Render
- **Tools:** Thunder Client (for API testing), nodemon (for dev hot-reload)

## Project Structure

```
reviews-api/
├── controllers/
│   └── reviewController.js   # Request handlers (business logic)
├── middleware/
│   └── errorHandler.js       # Centralized error handler
├── models/
│   └── Review.js             # Mongoose schema & model
├── routes/
│   └── reviewRoutes.js       # Route definitions
├── server.js                 # App entry point
├── .env.example              # Template for env variables
├── .gitignore
└── package.json
```

## API Endpoints

Base URL: `/reviews`

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/reviews` | Create a new review | Required |
| `GET` | `/reviews` | Get all reviews | — |
| `GET` | `/reviews/:id` | Get one review by ID | — |
| `PUT` | `/reviews/:id` | Update a review (partial updates allowed) | Required |
| `DELETE` | `/reviews/:id` | Delete a review | — |

### Review Schema

```json
{
  "reviewerName": "string (required, 1-50 chars)",
  "productName":  "string (required, 1-50 chars)",
  "rating":       "number (required, 1-5)",
  "comment":      "string (optional, 1-500 chars)",
  "createdAt":    "auto-generated",
  "updatedAt":    "auto-generated"
}
```

### Sample Request

```bash
POST /reviews
Content-Type: application/json

{
  "reviewerName": "Joseph",
  "productName": "iPhone 15",
  "rating": 5,
  "comment": "Great phone, fast and clean."
}
```

### Response Codes

| Code | Meaning |
|------|---------|
| `200` | OK — request succeeded |
| `201` | Created — new review saved |
| `400` | Bad Request — validation failed or invalid ID format |
| `404` | Not Found — review with that ID doesn't exist |
| `500` | Internal Server Error |

## Local Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Joseph-git486/reviews-api.git
   cd reviews-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the project root (see `.env.example`):
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=5000
   ```

4. **Run the dev server:**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:5000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start in dev mode with auto-restart (nodemon) |
| `npm start` | Start in production mode |

## What I Learned

Built this with zero prior backend experience. Key concepts picked up along the way:
- HTTP request lifecycle (method, URL, headers, body, status codes)
- Express routing, middleware, and the `req`/`res` pipeline
- Mongoose schemas, validation, and async DB operations
- Environment-based configuration & secrets management
- Centralized error handling with Express's 4-arg middleware pattern
- Deploying a Node + MongoDB Atlas app via Render
