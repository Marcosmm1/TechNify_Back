const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Name is required']
  },
  last_name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: false
  },
  social_fb: {
    type: String,
    required: false
  },
  social_it: {
    type: String,
    required: false
  },
  social_lk: {
    type: String,
    required: false
  },
  birthday: {
    type: Date,
    required: false
  },
  wishes_list: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event',
    required: false
  }],
  role: {
    type: String,
    enum: ['USER', 'ORGANIZER', 'ADMIN'],
    required: true,
    default: 'USER'
  },
  VATIN: {
    type: String,
    required: false,
    validate: {
      validator(value) {
        return /^[XYZ]?\d{5,8}[A-Z]$/.test(value)
      }
    }
  },
  business_name: {
    type: String,
    required: false
  },
  organizer_info: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  zip_code: {
    type: String,
    required: false
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel