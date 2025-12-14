import { Router } from "express";
import { pool } from "../database/database";
import { Article } from "../interfaces/article.interface";

export const articlesRouter = Router();

articlesRouter.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM articles");
    const articles = rows as Article[];

    res.json(articles);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
});
