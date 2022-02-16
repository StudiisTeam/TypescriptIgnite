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

  async update({ id, avatarFile }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(id)

    user.avatar = avatarFile
    console.log(user);

    await this.userRepository.update(user)
  }
}
