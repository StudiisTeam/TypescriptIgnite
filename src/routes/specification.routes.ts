import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/UseCases/create-specifications/create-specification-controller";


export const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()
specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post("/", createSpecificationController.handle)
