import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import dotenv from 'dotenv'
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../../../errors/app-erros";

dotenv.config()

interface IRequest {
  email: string
  password: string
}
interface IReponse {
  user: {
    name: string,
    email: string
  }
  token: string
}

@injectable()
export class AuthenticationUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) { }

  async auth({ email, password }: IRequest): Promise<IReponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError("User or password incorrect!")
    }

    const passwordIsCorrect = await compare(password, user.password)

    if (!passwordIsCorrect) {
      throw new AppError("User or password incorrect!")
    }

    const token = sign({}, process.env.ACCESS_TOKEN_SECRET, {
      subject: user.id,
      expiresIn: "1d"
    })

    const returnData: IReponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return returnData

  }
}
