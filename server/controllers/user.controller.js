const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const createError = require('http-errors');

module.exports = {
  createUser: async (req, res, next) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
    await User.findOne({email: newUser.email}, async (err, returnedUser) => {
      if (err) {
        next(createError(400, err))
      };
      if (!returnedUser) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        const savedUser = await new User(newUser).save();
        res.status(200).json({
          Success: true,
          ErrorMessage: null,
          Results: null
        })
      } else {
        next(createError(400, 'User already exist, try and login'))
      }
    });
  },

  loginUser: async (req, res, next) => {
    const user = {
      email: req.body.email,
      password: req.body.password
    }

    await User.findOne({ email: user.email }, (err, returnedUser) => {
      if (err) {
        next(createError(400, err))
      }
      if (!returnedUser) {
        next(createError(404, `User with ${user.email} does not exist. Please register`))
      }
      bcrypt.compare(user.password, returnedUser.password, (err, isMatch) => {
        if (err) {
          next(createError(400, err))
        }
        if (isMatch) {
          let user = returnedUser
          user.password = null;
          const token = jwt.sign({ user }, process.env.JWT_SECRET, {expiresIn: '1day'});
          res.status(200).json({
            Success: true,
            token,
            Results: [
              {
              id: returnedUser._id,
              username: returnedUser.username,
              email: returnedUser.email,
              name: returnedUser.name
              }
            ]
          });
        }
      })
    })
  },

  logoutUser: async (req, res, next) => {
    req.logout();
  },

  getUserProfile: async (req, res, next) => {
    await res.json({ user: req.user });
  },

  editUserProfile: async (req, res, next) => {

  }
}
