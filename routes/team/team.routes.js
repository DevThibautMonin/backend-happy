const express = require('express')
const { createTeam, getTeams } = require('../../controllers/team.controller')
const teamRouter = express.Router()

teamRouter.post('/', createTeam)
teamRouter.get('/', getTeams)

module.exports = teamRouter
