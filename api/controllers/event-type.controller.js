const EventType = require('../models/event-type.model')

const {
  handleError
} = require('../utils')

module.exports = {
  createType
}

function createType(req, res) {
  EventType
    .create(req.body)
    .then(newType => res.json(newType))
    .catch((err) => console.error(handleError))
}