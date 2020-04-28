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

router.get('/users', getAllUsers) // ADMIN
router.get('/', getUserById)
router.delete('/', deleteUserById)
router.put('/', updateUser)

module.exports = router