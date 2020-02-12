const passport = require('passport');
const asyncHandler = require('express-async-handler');
const JwtStrategy = require('passport-jwt').Strategy,
  { ExtractJwt } = require('passport-jwt'),
  User = require('../models/user.model')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromHeader('authorization');
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, asyncHandler(async (jwt_payload, done) => {
    const user = await User.findById(jwt_payload.user._id);
  if (user) {
    user.password = null;
    return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    };
  })));
