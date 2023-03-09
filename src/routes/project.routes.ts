import { Router } from 'express'
import { createProject, deleteProject, getProjects, updateProject } from '../controllers/project.controller'
const projectRouter = Router()

projectRouter.post('/', createProject)
projectRouter.get('/', getProjects)
projectRouter.put('/:id', updateProject)
projectRouter.delete('/:id', deleteProject)

export default projectRouter
