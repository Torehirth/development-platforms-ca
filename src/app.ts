import express from "express";
import { usersRouter } from "./routes/users.routes";
import { articlesRouter } from "./routes/articles.routes";

export const app = express();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/articles", articlesRouter);
