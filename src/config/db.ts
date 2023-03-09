import mongoose from "mongoose"

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGOOSE_URI as string)
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

export default connectDB
