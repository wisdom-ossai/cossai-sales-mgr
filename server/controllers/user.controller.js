const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
        console.error(err);
        res.json({
          success: false,
          message: 'Failed to register user'
        })
      };
      if (!returnedUser) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        const savedUser = await new User(newUser).save();
        res.json({
          success: true,
          message: 'User Registered',
          user: {
            email: savedUser.email,
            name: savedUser.name,
            username: savedUser.username
          }
        })
      } else {
        res.json({
          success: false,
          message: 'User already exist, try and login'
        })
      }
    });
  },

  loginUser: async (req, res, next) => {
    const user = {
      email: req.body.email,
      password: req.body.password
    }

    await User.findOne({ email: user.email }, (err, returnedUser) => {
      if (err) throw err;
      if (!returnedUser) {
        return res.json({ success: false, message: 'User not found' });
      }
      bcrypt.compare(user.password, returnedUser.password, (err, isMatch) => {
        if (err)
          throw err;
        if (isMatch) {
          const token = jwt.sign({ user: returnedUser }, process.env.JWT_SECRET, { expiresIn: 3600 });
          res.json({
            success: true,
            token: 'JWT ' + token,
            user: {
              id: returnedUser._id,
              username: returnedUser.username,
              email: returnedUser.email,
              name: returnedUser.name
            }
          });
        }
      })
    })
  },

  logoutUser: async (req, res, next) => {

  },

  getUserProfile: async (req, res, next) => {
    console.log(req.user);
    await res.json({ user: req.user });
  }
}
