import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../utils/config/upload";

import { CreateUserUseController } from "../../user/modules/account/usecases/create-user/create-user-controller";
import { UpdateUserAvatarController } from "../../user/modules/account/usecases/update-user-avatar/update-user-avatar-controller";
import { ensureAuthenticated } from "../../../main/middlewares/ensureAuthenticated";

export const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));
const createUserController = new CreateUserUseController();
userRoutes.post("/create-user", createUserController.handle);

const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.use(ensureAuthenticated);

userRoutes.patch("/avatar", uploadAvatar.single("avatar"), updateUserAvatarController.handle);
