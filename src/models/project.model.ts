import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: Buffer
    },
    members: {
      type: [String]
    },
    requests: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('project', projectSchema)
