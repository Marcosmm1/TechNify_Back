const User = require('../models/user.model')
const Event = require('../models/event.model')

const {
  handleError
} = require('../utils')

module.exports = {
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
}

function getAllUsers(req, res) {
  console.log(res.locals.user.role);
  User
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserById(req, res) {
  console.log(res.locals.user.role);
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

function createEvent(req, res) {
  const event = {
    owner: res.locals.user._id,
    ...req.body
  }
  Event
    .create(event)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateEvent(req, res) {
  Event
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getMyEvent(req, res) {
  Event
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteEvent(req, res) {
  Event
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function addWhisesToList(req, res) {
  User
    .findById(res.locals.user._id)
    .then(user => {
      user.wishes_list.push(req.body.wishes_list)
      user.save()
        .then(res.json(user))
        .catch((err) => console.error(error))
    })
}

function getEventsUser(req, res) {
  User
    .findById(res.locals.user._id)
    .populate('wishes_list')
    .then(user => res.json(user.wishes_list))
    .catch((err) => console.error(error))
}
