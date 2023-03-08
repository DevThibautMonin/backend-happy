const mongoose = require('mongoose')

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('team', teamSchema)
