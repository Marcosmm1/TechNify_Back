const User = require('../models/user.model')
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
  User
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserById(req, res) {
  User
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById(req, res) {
  User
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser(req, res) {
  User
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}