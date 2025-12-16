import { Router } from "express";
import { pool } from "../database/database";
import { User } from "../interfaces/user.interface";

export const usersRouter = Router();

// Using root folder here, but mounts the correct path in app.ts
usersRouter.get("/", async (req, res) => {
  try {
    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const [rows] = await pool.execute("SELECT * FROM users LIMIT ? OFFSET ?", [
      limit.toString(),
      offset.toString(),
    ]);

    const users = rows as User[]; // TypeScript type assertion (used type for clarity)

    res.json(users);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});
