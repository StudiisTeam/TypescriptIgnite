import { Router } from 'express'
import { createCategoryController } from '../modules/cars/UseCases/create-categories'
import { listCategoryController } from '../modules/cars/UseCases/list-categories'

export const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response))

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response)
})
