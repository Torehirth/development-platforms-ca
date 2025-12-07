import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express(); // This creates our Express application
app.use(cors()); // This enables CORS for all routes/adds CORS headers to every response

dotenv.config(); // This loads environment variables from a .env file into process.env
const PORT = process.env.PORT || 3000; // This is the port our server will listen on. Fallback on 3000 if not specified

interface Article {
  id: number;
  title: string;
  body: string;
  category: string;
  submitted_by: string;
  created_at: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Laptop",
    submitted_by: "Alice",
    body: "A high-performance laptop.",
    category: "Electronics",
    created_at: "2024-01-01",
  },
  {
    id: 2,
    title: "Headphones",
    submitted_by: "Bob",
    body: "Noise-cancelling headphones.",
    category: "Electronics",
    created_at: "2024-02-15",
  },
  {
    id: 3,
    title: "Keyboard",
    submitted_by: "Charlie",
    body: "Mechanical keyboard.",
    category: "Electronics",
    created_at: "2024-03-10",
  },
];

app.get("/articles", (req, res) => {
  // This handles GET requests to the /articles endpoint
  res.json(articles);
});

app.get("/articles/:id", (req, res) => {
  // 1. Get the id from the route parameter (as a string) and convert to number
  // We don't use destructuring here because we need to convert the string to a number
  const id = Number(req.params.id);

  // 2. Find the article with that id
  const article = articles.find((p) => p.id === id);

  // 3. If not found, return a 404 error
  if (!articles) {
    return res.status(404).json({ error: "Article not found" });
  }

  // 4. If found, return the articles as JSON
  res.json(articles);
});

// This starts the server and listens for incoming requests
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
