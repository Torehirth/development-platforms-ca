// src/middleware/auth.middleware.ts
import type { Request, Response, NextFunction } from "express";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import jwt from "jsonwebtoken";

// Custom request type so we can safely use req.user
export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Unauthorized - Auth header missing or wrong" });
  }

  // Separates "Bearer" and the token, and gets the token [1]. [0] is the word "Bearer".
  const accessToken = authHeader.split(" ")[1];

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res
      .status(500)
      .json({ error: "Something went wrong with the server" });
  }

  try {
    const decoded = jwt.verify(accessToken, jwtSecret) as JwtPayload;

    req.user = decoded; // Add user info to the request

    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}
