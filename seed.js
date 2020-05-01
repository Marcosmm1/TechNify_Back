const seeder = require('mongoose-seed')
require('dotenv').config()

const EVENT = require('./events.json')

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/event.model.js'])
  seeder.clearModels(['event'], function () {
    seeder.populateModels(EVENT, function () {
      seeder.disconnect()
    })
  })
})