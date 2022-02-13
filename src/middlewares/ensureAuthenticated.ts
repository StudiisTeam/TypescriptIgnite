import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/app-erros";
import { UserRepository } from "../modules/account/implementations/users-repositories";

interface IAuth {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  reponse: Response,
  next: NextFunction
) {

  const authorization = request.headers.authorization

  if (!authorization) {
    throw new AppError("Token missing")
  }

  const [, token] = authorization.split(" ")

  try {

    const { sub: user_id } = verify(token, process.env.ACCESS_TOKEN_SECRET) as IAuth

    const userRepository = new UserRepository()
    const user = await userRepository.findById(user_id)

    if (!user) {
      throw new AppError("User does not exist")
    }
    next()

  } catch (error) {
    throw new AppError("Token invalid")
  }
}
