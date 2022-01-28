import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/categories-repositories/categories-repository'
import { CreateCategoryService } from '../modules/cars/services/create-category-service'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.create({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list()
  return response.status(200).json(allCategories)
})
