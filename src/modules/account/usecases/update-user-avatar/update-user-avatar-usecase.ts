import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../implementations/users-repositories";

interface IRequest {
  id: string,
  avatarFile: string
}

@injectable()
export class UpadateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) { }

  async Update({ id, avatarFile }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(id)
    console.log(user);

    user.avatar = avatarFile

    await this.userRepository.create(user)
  }
}
