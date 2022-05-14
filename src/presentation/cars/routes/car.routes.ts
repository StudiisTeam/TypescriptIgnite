import { ensureAdmin } from "@main/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@main/middlewares/ensureAuthenticated";
import { Router } from "express";
import { CreateCarController } from "../modules/cars/UseCases/create-car/create-car-controller";
import { ListCarsController } from "../modules/cars/UseCases/list-cars/list-cars-controller";

export const carRoutes = Router();
const createCarController = new CreateCarController();
const listCarController = new ListCarsController();

carRoutes.post("/create", createCarController.handle);
carRoutes.get("/available-cars", listCarController.handle);
