import { ensureAdmin } from "@main/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@main/middlewares/ensureAuthenticated";
import { Router } from "express";
import { CreateCarController } from "../modules/cars/UseCases/create-car/create-car-controller";

export const carRoutes = Router();
const createCarController = new CreateCarController();

carRoutes.post(
  "/create",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);
