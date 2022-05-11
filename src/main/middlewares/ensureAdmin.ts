import { NextFunction, Request, Response } from "express";
import { AppError } from "../../presentation/errors/app-erros";
import { UserRepository } from "../../presentation/user/modules/account/implementations/users-repositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const userRepository = new UserRepository();

  const user = await userRepository.findById(id);
  if (!user.isAdmin) {
    throw new AppError("User isn't admin");
  }

  return next();
}
