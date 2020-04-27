const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: false
  },
  name: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  date_start: {
    type: Date,
    required: false
  },
  date_end: {
    type: Date,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'type',
    required: true
  },
  small_description: {
    type: String,
    required: true
  },
  large_description: {
    type: String,
    required: true
  },
  cover_img: {
    type: String,
    required: true
  },
  detail_img: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const Event = mongoose.model('event', eventSchema)
module.exports = Event
