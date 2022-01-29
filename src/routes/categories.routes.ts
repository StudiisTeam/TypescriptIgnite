import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categories-repositories/categories-repository'
import { createCategoryController } from '../modules/cars/UseCases'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response))

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list()
  return response.status(200).json(allCategories)
})
