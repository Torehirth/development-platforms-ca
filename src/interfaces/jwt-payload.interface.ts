export interface JwtPayload {
  user_id: number;
  email: string;
  iat?: number; // = "Issued at"
}
