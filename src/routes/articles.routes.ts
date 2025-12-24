import { Router } from "express";
import { pool } from "../database/database";
import { Article } from "../interfaces/article.interface";
import { authMiddleware, AuthRequest } from "../middlewares/auth.middleware";

export const articlesRouter = Router();

articlesRouter.get("/", async (req, res) => {
  try {
    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const [rows] = await pool.execute(
      "SELECT * FROM articles LIMIT ? OFFSET ?",
      [limit.toString(), offset.toString()]
    );

    const articles = rows as Article[];

    res.json(articles);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
});

articlesRouter.post("/", authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { title, body, category } = req.body as {
      title?: string;
      body?: string;
      category?: string;
    };

    if (!title || !body) {
      return res.status(400).json({
        error: "Title and body are required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        error: "User not authenticated",
      });
    }

    const userId = req.user.user_id;

    const [result] = await pool.execute(
      "INSERT INTO articles (title, body, category, submitted_by) VALUES (?, ?, ?, ?)",
      [title, body, category || null, userId]
    );

    const insertResult = result as { insertId: number };

    return res.status(201).json({
      message: "Article created successfully",
      articleId: insertResult.insertId,
    });
  } catch (error) {
    console.error("Failed to create the post", error);
    res.status(500).json({
      error: "Failed To create post",
    });
  }
});
