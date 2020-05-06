const bcrypt = require('bcrypt')
const seeder = require('mongoose-seed')

require('dotenv').config()

const UsersModel = require('./api/models/user.model.js')
const EventsModel = require('./api/models/event.model')
const TypesModel = require('./api/models/event-type.model')

const EVENTS = require('./events.json')

const ADMIN = {
  "first_name": "Marcos",
  "email": "marcos@meraki.com",
  "password": bcrypt.hashSync('11111111', 10),
  "role": "ADMIN"
}

const ORGANIZER = [
  {
    "first_name": "Bego",
    "email": "bego@technify.com",
    "password": bcrypt.hashSync('11111111', 10),
    "role": "ORGANIZER"
  },
  {
    "first_name": "Fernando",
    "email": "fer@technify.com",
    "password": bcrypt.hashSync('11111111', 10),
    "role": "ORGANIZER"
  }
]

const USER = [
  {
    "first_name": "Adrian",
    "email": "adri@technify.com",
    "password": bcrypt.hashSync('11111111', 10),
    "role": "USER"
  }
]

const TYPES = [
  {
    "name": "JAVASCRIPT",
  },
  {
    "name": "WEB DEVELOPMENT",
  },
  {
    "name": "UX",
  },
  {
    "name": "HACKATONS",
  },
  {
    "name": "OTHERS",
  },
]


seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['./api/models/event.model.js', './api/models/event-type.model.js', './api/models/user.model.js'])

  seeder.clearModels(['event', 'event_type', 'user'], async function () {
    const type = await TypesModel.create(TYPES)
    const user = await UsersModel.create(ORGANIZER)
    const usualUser = await UsersModel.create(USER)
    const admin = await UsersModel.create(ADMIN)
    for (i = 0; i < EVENTS[0].documents.length; i++) {
      const event = EVENTS[0].documents[i]
      event.owner = user[Math.floor(Math.random() * user.length)]._id
      event.event_type = type[Math.floor(Math.random() * type.length)]._id._id
      await EventsModel.create(event)
    }
    seeder.disconnect()
  })
})
