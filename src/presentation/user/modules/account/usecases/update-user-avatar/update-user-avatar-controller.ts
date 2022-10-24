import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpadateUserAvatarUseCase } from "./update-user-avatar-usecase";

export class UpdateUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const avatarFile = request.file.filename;

        const upadateUserAvatarUseCase = container.resolve(UpadateUserAvatarUseCase);

        await upadateUserAvatarUseCase.update({ id, avatarFile });
        return response.status(204).send();
    }
}
