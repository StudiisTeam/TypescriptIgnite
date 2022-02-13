import { Router } from "express";
import { CreateUserUseController } from "../modules/account/usecases/create-user-controller";

export const userRoutes = Router()

const createUserController = new CreateUserUseController()

userRoutes.post("/create-user", createUserController.handle)
