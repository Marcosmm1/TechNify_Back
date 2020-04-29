const Event = require('../models/event.model')
const EventType = require('../models/event-type.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllEvents,
  getEvent
}

function getAllEvents(req, res) {
  const query = {}
  if (req.query.date_start) {
    query.date_start = {
      $eq: `${req.query.date_start}`
    }
  }
  Event
    .find(query)
    .populate('event_type')
    .then(events => {
      if (!req.query.event_type) {
        return res.json(events)
      }
      const eventsFilterByEventType = events.filter(event => event.event_type.name === req.query.event_type)
      res.json(eventsFilterByEventType)
    })
    .catch((err) => handleError(err, res))
}

function getEvent(req, res) {
  Event
    .findById(req.params.id)
    .then(event => res.json(event))
    .catch((err) => handleError(err, res))
}