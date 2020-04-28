const router = require('express').Router()

const {
  createType
} = require('../controllers/event-type.controller')

router.post('/', createType)

module.exports = router