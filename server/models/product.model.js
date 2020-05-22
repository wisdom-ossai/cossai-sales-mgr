const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
  name: {
    type: String
  },
  number: {
    type: String
  },
  short_description: {
    type: String,
  },
  description: {
    type: String,
  },
  regular_price: {
    type: String,
  },
  price: {
    type: String,
  },
  slug: {
    type: String,
  },
  type: {
    type: String,
  },
  status: {
    type: String,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
  },

})

module.exports = mongoose.model('Product', ProductSchema);
