import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepositories";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) { }

  async create({ email, name, password, driver_licence }: ICreateUserDTO): Promise<void> {

    const passwordHashed = await hash(password, 8)

    this.userRepository.create({
      email,
      name,
      password: passwordHashed,
      driver_licence
    })
  }
}
