const express = require('express')
const { createTeam, getTeams, updateTeam, deleteTeam } = require('../../controllers/team.controller')
const teamRouter = express.Router()

teamRouter.post('/', createTeam)
teamRouter.get('/', getTeams)
teamRouter.put('/:id', updateTeam)
teamRouter.delete('/:id', deleteTeam)

module.exports = teamRouter
