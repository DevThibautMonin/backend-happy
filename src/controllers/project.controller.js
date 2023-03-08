const ProjectModel = require('../models/project.model')

module.exports.getProjects = async (req, res) => {
  const projects = await ProjectModel.find()
  res.status(200).json(projects)
}

module.exports.createProject = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "You should not validate empty data." })
  }

  const project = await ProjectModel.create({
    name: req.body.name,
    image: req.body.image,
    members: req.body.members,
    requests: req.body.requests
  })

  res.status(200).json(project)
}

module.exports.updateProject = async (req, res) => {
  const project = await ProjectModel.findById(req.params.id)

  if (!project) {
    res.status(400).json({ error: "This project doesn't exist." })
  }

  const updatedProject = await ProjectModel.findByIdAndUpdate(project, req.body, { new: true })

  res.status(200).json(updatedProject)

}

module.exports.deleteProject = async (req, res) => {
  const project = await ProjectModel.findById(req.params.id)

  if (!project) {
    res.status(400).json({ error: "This project doesn't exist." })
  }

  await ProjectModel.findByIdAndRemove(project)

  res.status(200).json(`Project with id ${req.params.id} has been removed.`)

}
