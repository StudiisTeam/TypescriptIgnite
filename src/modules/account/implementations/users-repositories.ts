import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../repositories/IUsersRepositories";
import { User } from "../entities/user"
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create(userData: ICreateUserDTO): Promise<void> {
    const { name, email, password, driver_licence } = userData

    const user = this.repository.create({
      name,
      email,
      password,
      driver_licence
    })

    await this.repository.save(user)
  }

  async update(userData: IUpdateUserDTO): Promise<void> {
    const { id, name, email, password, driver_licence, avatar } = userData

    const user = this.repository.create({
      id,
      name,
      email,
      password,
      driver_licence,
      avatar
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email })
    return user
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id })
    return user
  }
}
