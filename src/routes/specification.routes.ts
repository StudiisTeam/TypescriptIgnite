import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implemetations/specification-repository";
import { createSpecificationController } from "../modules/cars/UseCases/create-specifications";
import { CreateSpecificationUseCase } from "../modules/cars/UseCases/create-specifications/create-specification-use-cases";


export const specificationRoutes = Router()

specificationRoutes.post("/", (request, response) => createSpecificationController.handle(request, response))
