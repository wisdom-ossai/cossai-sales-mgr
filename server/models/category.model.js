const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  name: {type: String},
  description: { type: String },

}, { timestamps: true})

module.exports = mongoose.model('Category', CategorySchema);
