const router = require('express').Router()

const {
  createType,
  types
} = require('../controllers/event-type.controller')

router.post('/', createType)
router.get('/', types)

module.exports = router