import { Router } from "express";
import { AuthenticationUserController } from "../user/modules/account/usecases/authentication-user/authentication-user-controller";

export const authRoutes = Router()

const authenticationUserController = new AuthenticationUserController()

authRoutes.post("/sessions", authenticationUserController.handle)
