import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-erros";

export function HttpHelper(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    message: `Internal server error - ${err.message}`,
  });
}
