const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema(
  {
    phone_id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    manufacturer: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    screen: {
      type: String,
      trim: true,
    },
    processor: {
      type: String,
      trim: true,
    },
    ram: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

const Phone = mongoose.model('Phone', phoneSchema)
module.exports = Phone
