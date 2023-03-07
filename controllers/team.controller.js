const TeamModel = require('../models/team.model')

module.exports.getTeams = async (req, res) => {
  const teams = await TeamModel.find()
  res.status(200).json(teams)
}

module.exports.createTeam = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "You should not validate empty data." })
  }

  const team = await TeamModel.create({
    name: req.body.name
  })

  res.status(200).json(team)
}

module.exports.updateTeam = async (req, res) => {
  const team = await TeamModel.findById(req.params.id)

  if (!team) {
    res.status(400).json({ error: "This team doesn't exist." })
  }

  const updatedTeam = await TeamModel.findByIdAndUpdate(team, req.body, { new: true })

  res.status(200).json(updatedTeam)

}

module.exports.deleteTeam = async (req, res) => {
  const team = await TeamModel.findById(req.params.id)

  if (!team) {
    res.status(400).json({ error: "This team doesn't exist." })
  }

  await TeamModel.findByIdAndRemove(team)

  res.status(200).json(`Team with id ${req.params.id} has been removed.`)

}
