import express from 'express'
import connectDB from './config/db'
const app = express()
import dotenv from 'dotenv'
import projectRouter from './routes/project.routes'

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use(`/api/v${process.env.API_VERSION}/project`, projectRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
})
