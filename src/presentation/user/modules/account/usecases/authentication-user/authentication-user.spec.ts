import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "../../repositories/inMemory/user-repository-in-memory";
import { CreateUserUseCase } from "../create-user/create-user-usecase";
import { AuthenticationUserUseCase } from "./authentication-user-usecase";

interface ISut {
  sut: AuthenticationUserUseCase
  addAccount: CreateUserUseCase
}

const makeSut = (): ISut => {

  const createUserRepositoryInMemory = new UserRepositoryInMemory()
  const sut = new AuthenticationUserUseCase(createUserRepositoryInMemory)
  const addAccount = new CreateUserUseCase(createUserRepositoryInMemory)

  return {
    sut,
    addAccount
  }
}

describe('Authenticaiton user', () => {

  test('should be able to athenticate an user', async () => {
    const { sut, addAccount } = makeSut()
    const user: ICreateUserDTO = {
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
      driver_licence: "any_licence"
    }

    await addAccount.create(user)

    const authUser = await sut.auth({
      email: user.email,
      password: user.password
    })

    expect(authUser).toHaveProperty("token")
  })
});
