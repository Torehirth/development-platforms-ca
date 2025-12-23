import { Router } from "express";
import { pool } from "../database/database";
import { User } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const usersRouter = Router();

// GET request
// Mounts the correct path in app.ts
usersRouter.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const [rows] = await pool.execute("SELECT * FROM users LIMIT ? OFFSET ?", [
      limit.toString(),
      offset.toString(),
    ]);

    const users = rows as User[];

    res.json(users);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});

// POST request - register user
usersRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    const [existing] = await pool.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );
    const existingRows = existing as Array<{ id: number }>;

    if (existingRows.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const [result] = await pool.execute(
      "INSERT INTO users (email, password_hash) VALUES (?, ?)",
      [email, passwordHash]
    );

    res.status(201).json({
      message: "User registered successfully",
      userId: (result as any).insertId, // (.. as any) = To avoid TypeScript error
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

// POST request - login
usersRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body as {
      email: string;
      password: string;
    };

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user by email
    const [rows] = await pool.execute(
      "SELECT id, email, password_hash FROM users WHERE email = ?",
      [email]
    );

    const users = rows as User[]; // or DbUser[]
    if (users.length === 0) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const user = users[0];

    // Compare password with stored hash
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Create JWT
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET is missing in environment variables");
      return res.status(500).json({
        error: "Server misconfiguration",
      });
    }

    const accessToken = jwt.sign(
      {
        user_id: user.id,
        email: user.email,
      },
      jwtSecret
    );

    // Send response
    return res.status(200).json({
      message: "Login successful",
      accessToken,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Something went wrong during login" });
  }
});
