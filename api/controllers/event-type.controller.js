const EventType = require('../models/event-type.model')

const {
  handleError
} = require('../utils')

module.exports = {
  createType,
  types
}

function createType(req, res) {
  EventType
    .create(req.body)
    .then(newType => res.json(newType))
    .catch((err) => console.error(handleError))
}

function types(req, res) {
  EventType
    .find()
    .then(types => res.json(types))
    .catch((err) => console.error(err))
}