const router = require('express').Router()
const {
  checkRoles
} = require('../controllers/auth.controller')

const {
  getOrganizerEvents,
  createEvent,
  getListWishes,
  addWhisesToList,
  removeToWishesList,
  updateEvent,
  deleteEvent
} = require('../controllers/user-event.controller')

router.get('/myevents', checkRoles, getOrganizerEvents)
router.post('/', checkRoles, createEvent)
router.get('/wishes', getListWishes) // ADMIN
router.post('/wishes', addWhisesToList)
router.delete('/wishes/:wishesId', removeToWishesList)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router