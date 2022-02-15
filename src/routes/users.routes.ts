import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserUseController } from "../modules/account/usecases/create-user/create-user-controller";
import { UpdateUserAvatarController } from "../modules/account/usecases/update-user-avatar/update-user-avatar-controller";

export const userRoutes = Router()

const createUserController = new CreateUserUseController()
userRoutes.post("/create-user", createUserController.handle)


const updateUserAvatarController = new UpdateUserAvatarController()

userRoutes.use(ensureAuthenticated)
userRoutes.patch("/avatar", updateUserAvatarController.handle)
