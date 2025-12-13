import { Router } from "express";
import { pool } from "../database/database";
import { User } from "../interfaces/user.interface";

const router = Router();

// Using root folder here, but mounts the correct path in app.ts
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM users");
    const users = rows as User[]; // TypeScript type assertion (used type for clarity)

    res.json(users);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});

export default router;
