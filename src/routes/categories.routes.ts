import { Router } from 'express'
import multer from 'multer'
import createCategoryController from '../modules/cars/UseCases/create-categories'
import { importCategoriesController } from '../modules/cars/UseCases/import-categories'
import { listCategoryController } from '../modules/cars/UseCases/list-categories'

export const categoriesRoutes = Router()
const upload = multer({ dest: "./tmp" })

categoriesRoutes.post('/create', (request, response) => createCategoryController().handle(request, response))

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single('file'), (request, response) => importCategoriesController.handle(request, response))
