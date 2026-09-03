# Learning Backend with node

A Node.js + Express backend built for learning and practicing backend development concepts — REST APIs, authentication, database integration, and more.

## Features

- RESTful API structure with Express
- User authentication (JWT-based)
- CRUD operations with a database (MongoDB/MySQL/PostgreSQL)
- Input validation & centralized error handling
- Environment-based configuration
- Middleware examples (auth, logging, error handling)

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose) — replace with your DB of choice
- **Auth:** JSON Web Tokens (JWT), bcrypt for password hashing
- **Other:** dotenv, cors, morgan, nodemon

## Prerequisites

- Node.js >= 18.x
- npm or yarn
- MongoDB instance (local or Atlas)

## Getting Started

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/learning-backend.git
cd learning-backend
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Configure environment variables

Create a `.env` file in the project root:

\`\`\`env
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/learning_backend

# Auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
\`\`\`

### 4. Run the server

\`\`\`bash
# Development (with nodemon)
npm run dev

# Production
npm start
\`\`\`

The server will start at `http://localhost:5000` by default.

## Project Structure

\`\`\`
learning-backend/
├── src/
│   ├── config/          # DB and app configuration
│   ├── controllers/     # Route handlers / business logic
│   ├── middlewares/     # Auth, error handling, validation
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express route definitions
│   ├── utils/           # Utility functions
│   └── app.js           # Express app setup
├── .env.example
├── package.json
└── server.js             # Entry point
\`\`\`

## API Endpoints

| Method | Endpoint              | Description                | Auth |
|--------|------------------------|-----------------------------|------|
| POST   | `/api/auth/register`   | Register a new user        | No   |
| POST   | `/api/auth/login`      | Login and get JWT token    | No   |
| GET    | `/api/users/me`        | Get current user profile   | Yes  |
| GET    | `/api/items`           | Get all items               | Yes  |
| POST   | `/api/items`           | Create a new item          | Yes  |
| PUT    | `/api/items/:id`       | Update an item              | Yes  |
| DELETE | `/api/items/:id`       | Delete an item              | Yes  |

> Update this table to match your actual routes.

## Available Scripts

| Command         | Description                            |
|-----------------|------------------------------------------|
| `npm run dev`   | Start server with nodemon (hot reload)  |
| `npm start`     | Start server in production mode        |
| `npm test`      | Run tests                               |

## Error Handling

All errors are returned in a consistent JSON format:

\`\`\`json
{
  "success": false,
  "message": "Error description here"
}
\`\`\`

## Learning Goals

This project was built to practice:

- Structuring an Express app properly (MVC-style)
- Connecting to and querying a database
- Implementing authentication & authorization
- Writing middleware
- Handling errors and validating input

## License

This project is licensed under the [MIT License](LICENSE).
