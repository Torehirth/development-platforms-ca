# Development Platform Backend

Express.js • TypeScript • MySQL

This project is about creating a backend REST API, built with Express.js, TypeScript, and MySQL as part of the Development Platforms CA.

The application focuses on core backend concepts such as authentication, protected routes, database relations, and clean project structure.

The backend supports:

- User registration and login
- Password hashing with bcrypt
- Authentication using JWT
- Creating and retrieving articles/posts
- SQL-based relational data storage
- Organized routes and middleware

---

## 🚀 Tech Stack

- **Node.js** — runtime environment
- **Express.js** — server framework
- **TypeScript** — type safety
- **MySQL** — relational database
- **dotenv** — environment variable handling
- **bcrypt** — password hashing
- **jsonwebtoken** — JWT authentication

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Torehirth/development-platforms-ca
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following variables:

```env
DB_HOST=localhost || your_database_host
DB_USER=DVP || your_database_user
DB_PASSWORD=your_database_password
DB_NAME=development_platform_db || your_database_name
DB_PORT=3306 || your_database_port

JWT_SECRET=secret_jwt_key
PORT=3000
```

### 4. Database setup

4. Database setup

    1. Ensure MySQL is running.

    2. Create the database.

    3. Import the provided SQL schema:

```sql 
source sql/schema.sql;
```

This schema includes:

* users table

* articles table

* Foreign key relationship between articles and users

### 5. Start the server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm build
npm start
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
