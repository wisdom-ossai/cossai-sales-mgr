const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const db = require('../config/database');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true
  }
})

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByUsername = async (id, callback) => {
  User.findById(id, callback);
}

module.exports.getUserByUsername = async (username, callback) => {
  User.findOne({ username: username }, callback);
}

module.exports.addUser = async (newUser, callback) => {
  newUser.password = await bcrypt.hash(newUser.password, 10);
  await newUser.save(callback);
}
