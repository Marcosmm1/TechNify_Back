const Event = require('../models/event.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllEvents,
  getEvent,
  getMyEvent,
  createEvent,
  updateEvent,
  deleteEvent
}
// Función que te da todos los eventos o hace filter por tipo o fecha, sin loguearte
function getAllEvents(req, res) {
  const query = {}

  /*   if (req.query.type) {
      query.type = {
        $regex: `${req.query.type}`,
        $options: 'i'
      }
    }
    if (req.query.date_start) {
      query.date = {
        $eq: `${req.query.date_start}`
      }
    } */
  Event
    .find(query)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getEvent(req, res) {
  Event
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getMyEvent() {}

function createEvent(req, res) {
  console.log("funcion create");
  const event = {
    owner: res.locals.user,
    ...req.body
  }
  Event
    .create(event)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateEvent(req, res) {
  Event
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteEvent(req, res) {
  Event
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}