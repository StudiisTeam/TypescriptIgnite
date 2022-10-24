import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../repositories/IUsersRepositories";
import { User } from "../entities/user";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";

export class UserRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create(userData: ICreateUserDTO): Promise<User> {
        const { name, email, password, driver_license } = userData;
        const user = this.repository.create({
            name,
            email,
            password,
            driver_license,
        });
        await this.repository.save(user);
        return user;
    }

    async update(userData: IUpdateUserDTO): Promise<void> {
        const { id, name, email, password, driver_license, avatar } = userData;
        const user = this.repository.create({
            id,
            name,
            email,
            password,
            driver_license,
            avatar,
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> { return await this.repository.findOne({ email }); }
    async findById(id: string): Promise<User> { return await this.repository.findOne({ id }); }
}
