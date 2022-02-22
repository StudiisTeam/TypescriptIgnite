import { compare } from "bcrypt";
import { UserRepositoryInMemory } from "../../repositories/inMemory/user-repository-in-memory";
import { CreateUserUseCase } from "./create-user-usecase";

let userRepositoryInMemory: UserRepositoryInMemory
let sut: CreateUserUseCase

describe('Create User', () => {
  beforeAll(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    sut = new CreateUserUseCase(userRepositoryInMemory)
  })
  test('should return status 201 to create User Account', async () => {
    const userData = {
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
      driver_licence: "any_licence"
    }
    await sut.create(userData)
    const user = await userRepositoryInMemory.findByEmail(userData.email)
    //const decryptPassword = await compare(userData.password, user.password)
    expect(user).toEqual({
      id: user.id,
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
      driver_licence: "any_licence"
    })
  });
});
