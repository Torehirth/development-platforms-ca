# Development Platform Backend

Express.js • TypeScript • MySQL

This backend application is built with **Express.js**, **TypeScript**, and **MySQL**.  
It is designed as a clean, beginner-friendly structure that follows good conventions for separation of concerns, making it easy to understand, maintain, and extend.

The backend supports:

- User registration and login
- Password hashing
- Authentication using tokens (JWT recommended)
- Managing articles/posts
- SQL-based data storage
- Organized endpoints and logic separation

---

## 🚀 Tech Stack

- **Node.js** — runtime environment
- **Express.js** — server framework
- **TypeScript** — type safety
- **MySQL** — relational database
- **dotenv** — environment variable support
- **bcrypt** — password hashing
- **jsonwebtoken** — authentication tokens

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following variables:

```env
DB_HOST=localhost || your_database_host
DB_USER=root || your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=3306 || your_database_port

JWT_SECRET=your_secret_jwt_key
PORT=3000
```

### 4. Start the server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm build
npm start
```

## Database Setup

1. Ensure MySQL is running.
2. Create the database and tables by sourcing your schema:

```sql
source sql/schema.sql;
```

3. Confirm the SQL database values matches the values in your .env.

## Architecture Overview

Request flow:

- Express route receives the request
- Route calls a controller
- Controller delegates to a service
- Service interacts with MySQL (via a repository or query layer)
- Response returns: service → controller → route → client

Why this structure:

- Smaller, focused files
- Clear separation of concerns
- Easier to test and maintain

## Authentication

Features:

- Password hashing (bcrypt)
- Login with email/username + password
- JWT-based auth
- Protected routes via middleware

Endpoints:

- POST /auth/register
- POST /auth/login

Send the JWT in the Authorization header:

```
Authorization: Bearer <token>
```

## Testing the API

Tools:

- Postman
- Insomnia
- Thunder Client (VS Code)

Typical flow:

1. Register a user
2. Log in to receive a token
3. Call protected endpoints with the token
4. Create and manage articles

## NPM Scripts

```json
{
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

## Notes

- TypeScript: run build before production.
- .env must be correctly configured for MySQL connection.
- Each module (routes, controllers, services, middlewares) includes its own README for guidance.
- The structure is designed for learning clean backend practices.

## Troubleshooting

- Is MySQL running?
- Are .env values correct?
- Did you run npm install?
- Did you build before starting in production?
- Any typos in SQL table/column names?

## Final Notes

- Beginner-friendly and extensible
- Clean, organized architecture
- Good starting point for full-stack apps
