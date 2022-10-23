import { NextFunction, Request, Response } from "express";
import { AppError } from "helper/errors/app-erros";
import { verify } from "jsonwebtoken";
import { UserRepository } from "presentation/user/modules/account/implementations/users-repositories";

interface IAuth {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  reponse: Response,
  next: NextFunction
) {
  const authorization = request.headers.authorization;

  if (!authorization) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    ) as IAuth;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exist", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError("Token invalid", 401);
  }
}
