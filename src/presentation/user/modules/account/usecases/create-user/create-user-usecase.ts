import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../../errors/app-erros";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  async create({
    email,
    name,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadExists = await this.userRepository.findByEmail(email);

    if (userAlreadExists) {
      throw new AppError("User Alread Exists");
    }

    const passwordHashed = await hash(password, 8);

    const user = await this.userRepository.create({
      email,
      name,
      password: passwordHashed,
      driver_license,
    });

    return user;
  }
}
