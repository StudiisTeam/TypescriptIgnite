import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../repositories/IUsersRepositories";
import { User } from "../entities/user"
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create(userData: ICreateUserDTO): Promise<void> {
    const { name, username, email, password, driver_licence } = userData

    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_licence
    })

    await this.repository.save(user)
  }
}
