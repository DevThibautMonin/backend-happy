import projectSchema from '../models/project.model'
import { RequestHandler } from 'express'

export const getProjects: RequestHandler = async (req, res, next) => {
  const projects: Project[] = await projectSchema.find()
  res.status(200).json(projects)
}

export const createProject: RequestHandler = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "You should not validate empty data." })
  }

  const project = await projectSchema.create({
    name: req.body.name,
    image: req.body.image,
    members: req.body.members,
    requests: req.body.requests
  })

  res.status(201).json({message: "New project created.", project: project})
}

export const updateProject: RequestHandler = async (req, res, next) => {
  const project = await projectSchema.findById(req.params.id)

  if (!project) {
    res.status(400).json({ error: "This project doesn't exist." })
  }

  const updatedProject = await projectSchema.findByIdAndUpdate(project, req.body, { new: true })

  res.status(200).json(updatedProject)

}

export const deleteProject: RequestHandler = async (req, res, next) => {
  const project = await projectSchema.findById(req.params.id)

  if (!project) {
    res.status(400).json({ error: "This project doesn't exist." })
  }

  await projectSchema.findByIdAndRemove(project)

  res.status(200).json(`Project with id ${req.params.id} has been removed.`)

}
