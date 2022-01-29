import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/specification/specification-repository";
import { CreateSpecificationService } from "../modules/cars/services/create-specification-service";

export const specificationRoutes = Router()

const sprecificationRepository = new SpecificationRepository()

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService(sprecificationRepository)
  createSpecificationService.create({ name, description })

  return response.status(201).send()
})
