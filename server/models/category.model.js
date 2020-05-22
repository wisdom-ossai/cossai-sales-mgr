const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  name: {type: String},
  description: {type: String}
})

module.exports = mongoose.model('Category', CategorySchema); 