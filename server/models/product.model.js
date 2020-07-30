const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
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


}, { timestamps: true})

module.exports = mongoose.model('Product', ProductSchema);
