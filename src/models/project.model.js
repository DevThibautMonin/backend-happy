const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
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

module.exports = mongoose.model('project', projectSchema)
