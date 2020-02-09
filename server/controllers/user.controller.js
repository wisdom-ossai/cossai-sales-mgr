const User = require('../models/user.model');
const password = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
  createUser: async (req, res, next) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
      if (err) {
        res.json({
          success: false,
          message: 'Failed to register user'
        })
      } else {
        res.json({
          success: true,
          message: 'User Registered',
          user: user
        })
      }
    })
  },

  loginUser: async (req, res, next) => {
    const user = await users.filter(user => user.username === req.body.username && user.password === req.body.password);
    if (user.length > 0) {
      res.json({
        massage: 'Login successful!',
        errorMassage: null,
        Result: user
      });
    } else {
      res.json({
        massage: 'User not found!',
        errorMassage: 'Error log',
        Result: user
      });
    }

  },

  logoutUser: async (req, res, next) => {

  }
}
