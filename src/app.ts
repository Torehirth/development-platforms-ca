import express from "express";
import usersRouter from "./routes/users.routes"; // router is a default export = renamed to usersRouter

const app = express();

app.use(express.json());

app.use("/users", usersRouter);

export default app;
