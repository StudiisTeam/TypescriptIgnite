import { Router } from 'express'
import multer from 'multer'
import { CreateCategoryController } from '../modules/cars/UseCases/create-categories/create-category.controller'

import { importCategoriesController } from '../modules/cars/UseCases/import-categories'
import { listCategoryController } from '../modules/cars/UseCases/list-categories'

export const categoriesRoutes = Router()
const upload = multer({ dest: "./tmp" })

const createCategoryController = new CreateCategoryController()
categoriesRoutes.post('/create', createCategoryController.handle)

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single('file'), (request, response) => importCategoriesController.handle(request, response))
