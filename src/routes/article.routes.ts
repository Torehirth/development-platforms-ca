import { Router } from "express";
import { pool } from "../database/database";
import { Article } from "../interfaces/article.interface";

export const articleIdRouter = Router();

// Mounts the correct path in app.ts
articleIdRouter.get("/:id", async (req, res) => {
  try {
    const articleId = Number(req.params.id);

    if (isNaN(articleId)) {
      return res.status(400).json({
        error: "Invalid article ID",
      });
    }

    const [rows] = await pool.execute("SELECT * FROM articles WHERE id = ?", [
      articleId,
    ]);
    const articles = rows as Article[];

    if (articles.length === 0) {
      return res.status(404).json({
        error: "Article not found",
      });
    }

    res.json(articles[0]);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      error: "Failed to fetch article",
    });
  }
});
