const router = require('express').Router()
const {
  checkRoles
} = require('../controllers/auth.controller')

const {
  getOrganizerEvents,
  createEvent,
  getListWishes,
  addWhisesToList,
  updateEvent,
  deleteEvent
} = require('../controllers/user-event.controller')

router.get('/', checkRoles, getOrganizerEvents)
router.post('/', checkRoles, createEvent)
router.get('/wishes', getListWishes) // ADMIN
router.post('/wishes', addWhisesToList)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router