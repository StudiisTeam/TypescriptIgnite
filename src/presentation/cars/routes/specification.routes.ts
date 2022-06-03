import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/UseCases/create-specifications/create-specification-controller";

export const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.post("/create", createSpecificationController.handle);
