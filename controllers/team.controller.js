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
