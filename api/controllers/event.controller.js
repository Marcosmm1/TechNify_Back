const Event = require('../models/event.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllEvents,
  getEvent
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