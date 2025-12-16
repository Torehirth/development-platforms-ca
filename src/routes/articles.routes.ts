import { Router } from "express";
import { pool } from "../database/database";
import { Article } from "../interfaces/article.interface";

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
