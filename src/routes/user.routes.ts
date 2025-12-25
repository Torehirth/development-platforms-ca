import { Router } from "express";
import { pool } from "../database/database";
import { User } from "../interfaces/user.interface";

export const userIdRouter = Router();

// Mounts the correct path in app.ts
userIdRouter.get("/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);

    if (isNaN(userId)) {
      return res.status(400).json({
        error: "Invalid user ID",
      });
    }

    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);
    const users = rows as User[];

    if (users.length === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.json(users[0]);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});
