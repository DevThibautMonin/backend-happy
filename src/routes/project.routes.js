const express = require('express')
const projectRouter = express.Router()
const { createProject, getProjects, updateProject, deleteProject } = require('../controllers/project.controller')

projectRouter.post('/', createProject)
projectRouter.get('/', getProjects)
projectRouter.put('/:id', updateProject)
projectRouter.delete('/:id', deleteProject)

module.exports = projectRouter
