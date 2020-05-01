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
    type: String,
    required: true
  },
  date_end: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  event_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event_type',
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
  cover_img: [{
    type: String,
    required: false
  }],
  detail_img: {
    type: String,
    required: false
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const Event = mongoose.model('event', eventSchema)
module.exports = Event
