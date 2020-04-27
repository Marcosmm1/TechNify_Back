const router = require('express').Router()

const {
  getAllEvents,
  getEvent
} = require('../controllers/event.controller')

router.get('/', getAllEvents)
router.get('/:id', getEvent)

module.exports = router