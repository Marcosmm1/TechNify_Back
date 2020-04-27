const router = require('express').Router()
const {
  checkRoles
} = require('../controllers/auth.controller')

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  getMyEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  addWhisesToList,
  getEventsUser
} = require('../controllers/user.controller')

router.get('/users', getAllUsers) // ADMIN
router.get('/', getUserById)
router.delete('/', deleteUserById)
router.put('/', updateUser)
router.get('/', checkRoles, getMyEvent)
router.get('/events', getEventsUser) // ADMIN
router.post('/', addWhisesToList)
router.post('/events', checkRoles, createEvent)
router.put('/events/:id', updateEvent)
router.delete('/events/:id', deleteEvent)

module.exports = router