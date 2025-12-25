import express from "express";
import { usersRouter } from "./routes/users.routes";
import { userIdRouter } from "./routes/user.routes";
import { articlesRouter } from "./routes/articles.routes";
import { articleIdRouter } from "./routes/article.routes";

export const app = express();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/users", userIdRouter);
app.use("/articles", articlesRouter);
app.use("/articles", articleIdRouter);
