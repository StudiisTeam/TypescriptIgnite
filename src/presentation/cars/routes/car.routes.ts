import { Router } from "express";
import { CreateCarController } from "../modules/cars/UseCases/create-car/create-car-controller";

export const carRoutes = Router();
const createCarController = new CreateCarController();

carRoutes.post("/create", createCarController.handle);
