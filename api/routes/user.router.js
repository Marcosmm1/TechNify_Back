const router = require('express').Router()
const {
  checkRoles
} = require('../controllers/auth.controller')

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/user.controller')

router.get('/', checkRoles, getAllUsers) // ADMIN
router.get('/me', getUserById)
router.delete('/me', deleteUserById)
router.put('/me', updateUser)

module.exports = router