const Phone = require('../models/phone.model')

function allPhones() {
  return Phone.find()
}

function phone(_parent, args) {
  return Phone.findOne({ phone_id: args.phone_id })
}

module.exports = {
  allPhones,
  phone,
}
