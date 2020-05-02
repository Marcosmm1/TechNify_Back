const User = require('../models/user.model')
const Event = require('../models/event.model')

const {
  handleError
} = require('../utils')

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
}

function getAllUsers(req, res) {
  if(res.locals.user.role === "ADMIN"){
    User
      .find()
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
}

function getUserById(req, res) {
  User
    .findById(res.locals.user._id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById(req, res) {
  User
    .remove({
      _id: res.locals.user._id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser(req, res) {
  User
    .findByIdAndUpdate(res.locals.user._id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}