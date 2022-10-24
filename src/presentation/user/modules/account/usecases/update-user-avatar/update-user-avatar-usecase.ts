import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../../../utils/file";
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
        if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`)

        user.avatar = avatarFile
        await this.userRepository.update(user)
    }
}
