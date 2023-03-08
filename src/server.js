const express = require('express')
const connectDB = require('./config/db')
const app = express()
const dotenv = require('dotenv').config()
const projectRouter = require('./routes/project.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use(`/api/v${process.env.API_VERSION}/project`, projectRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
})
