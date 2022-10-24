import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/user";
import { IUsersRepository } from "../IUsersRepositories";

export class UserRepositoryInMemory implements IUsersRepository {
    repository: User[] = []
    async create(userData: ICreateUserDTO): Promise<User> {
        const user = new User()
        Object.assign(user, userData)
        this.repository.push(user)
        return user
    }
    async findByEmail(email: string): Promise<User> { return this.repository.find((user) => user.email === email) }
    async findById(id: string): Promise<User> { return this.repository.find((user) => user.id === id) }
}
