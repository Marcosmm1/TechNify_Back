const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const typeModel = mongoose.model('type', typeSchema)
module.exports = typeModel
