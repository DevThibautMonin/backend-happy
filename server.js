const express = require('express')
const connectDB = require('./src/config/db')
const app = express()
const dotenv = require('dotenv').config()
const teamRouter = require('./src/routes/team/team.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use('/team', teamRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`)
})
