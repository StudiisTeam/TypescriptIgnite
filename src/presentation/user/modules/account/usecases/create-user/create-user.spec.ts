import { compare } from "bcrypt";
import { UserRepositoryInMemory } from "../../repositories/inMemory/user-repository-in-memory";
import { CreateUserUseCase } from "./create-user-usecase";

interface SutTypes {
  sut: CreateUserUseCase
}

const makeSut = (): SutTypes => {
  const userRepositoryInMemory = new UserRepositoryInMemory()
  const sut = new CreateUserUseCase(userRepositoryInMemory)

  return {
    sut
  }
}

describe('Create User', () => {

  test('should return status 201 to create User Account', async () => {
    const { sut } = makeSut()
    const userData = {
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
      driver_licence: "any_licence"
    }
    const user = await sut.create(userData)

    // expect(user).toEqual({
    //   name: "any_name",
    //   email: "any_email@mail.com",
    //   driver_licence: "any_licence"
    // })
  });
});
