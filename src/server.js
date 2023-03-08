const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv').config()
const teamRouter = require('./routes/team/team.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use('/team', teamRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`)
})
