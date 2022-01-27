import { Router } from 'express'
import { CategoriesRepository } from '../repository/categories-repository'

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const categoryAlreadExist = categoriesRepository.findByName(name)
  if (categoryAlreadExist) {
    return response.status(400).json({ error: "Category alread Exist" })
  }
  categoriesRepository.create({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list()
  return response.status(200).json(allCategories)
})
