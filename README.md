# Development Platform Backend

Express.js • TypeScript • MySQL

This project involves creating a backend REST API using Express.js, TypeScript, and MySQL as part of Noroff’s Development Platforms course assignment.

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

- users table

- articles table

- Foreign key relationship between articles and users

### 5. Start the server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

## Authentication

The API uses JWT-based authentication.

Features:

- Passwords are hashed with bcrypt
- Users log in using email and password
- JWT tokens are issued on login
- Protected routes use authentication middleware

```
Authorization: Bearer <accessToken>
```

Protected endpoints:

- POST /articles - Creates an article/post

## Testing the API

Tools:

- Postman
- Insomnia
- Thunder Client (VS Code)

Typical flow:

1. Register a user
2. Log in to receive a JWT (accessToken)
3. Call protected endpoints with the token in the header
4. Create and fetch articles

## Project Structure

- Routes are organised using Express Router
- Authentication logic is handled in middleware
- Database access is handled via MySQL queries
- TypeScript interfaces are used for request and JWT payloads

This structure was chosen to keep responsibilities clear and make the project easier to understand and extend.

## NPM Scripts

```json
{
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

### Motivation section

I chose Option 1 because I wanted to learn more about backend development. Most of my experience so far is frontend, so this project felt like a good way to understand how APIs, authentication, and databases work behind the scenes.

Another reason is the job market. There seems to be a growing demand for developers who understand both frontend and backend, and having some backend knowledge increases job possibilities, even if I mainly work with frontend.

I also like the technologies used in this project. Express.js, TypeScript, and MySQL are all popular and relevant, and this assignment gave me a good starting point. I want to dig deeper into these technologies over time and get more comfortable working across the full stack.
