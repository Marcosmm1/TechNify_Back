const router = require('express').Router()
const {
  checkRoles
} = require('../controllers/auth.controller')

const {
  getAllEvents,
  getEvent,
  getMyEvent,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/event.controller')

router.get('/', getAllEvents)
router.get('/:id', getEvent)
router.get('/me/events', getMyEvent)
router.post('/', checkRoles, createEvent)
router.put('/me/events/:id', updateEvent)
router.delete('/me/events/:id', deleteEvent)

module.exports = router