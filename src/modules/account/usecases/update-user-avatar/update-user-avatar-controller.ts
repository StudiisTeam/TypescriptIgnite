import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpadateUserAvatarUseCase } from "./update-user-avatar-usecase";

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const { id } = request.user
    const avatarFile = null
    console.log(id);

    const upadateUserAvatarUseCase = container.resolve(UpadateUserAvatarUseCase)

    await upadateUserAvatarUseCase.Update({ id, avatarFile })
    return response.status(204).send()
  }
}
