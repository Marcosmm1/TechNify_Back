const User = require('../models/user.model')
const Event = require('../models/event.model')

const {
  handleError
} = require('../utils')

module.exports = {
  getOrganizerEvents,
  createEvent,
  getListWishes,
  addWhisesToList,
  removeToWishesList,
  updateEvent,
  deleteEvent
}

function getOrganizerEvents(req, res) {
  Event
    .find({
      owner: res.locals.user._id
    })
    .populate('owner')
    .populate('event_type')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createEvent(req, res) {
  const newEvent = {
    owner: res.locals.user,
    ...req.body
  }
  Event
    .create(newEvent)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function getListWishes(req, res) {
  User
    .findById(res.locals.user._id)
    .populate({
      path: 'wishes_list',
      populate: {
        path: 'event_type'
      }
    })
    .then(user => res.json(user.wishes_list))
    .catch((err) => console.error(error))
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

function removeToWishesList(req, res) {
  const wishesId = req.params.wishesId
  User
    .findById(res.locals.user._id)
    .then(user => {
      user.wishes_list.remove(wishesId)
      user.save()
        .then(res.json(user))
        .catch((err) => console.error(error))
    })
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

function deleteEvent(req, res) {
  Event
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
