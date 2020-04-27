const router = require('express').Router()
const {
  authUser
} = require('../utils/index')

const authRouter = require('./auth.router')
const usersRouter = require('./user.router')
const eventRouter = require('./event.router')

router.use('/auth', authRouter)
router.use('/me/users', authUser, usersRouter)
router.use('/events', eventRouter)

// router.get('/whoami', authUser, (req, res) => {
//   res.send(`hi there! ${res.locals.user.name}`)
// })

module.exports = router