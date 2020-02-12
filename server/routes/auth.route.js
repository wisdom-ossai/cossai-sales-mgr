const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const passportConfig = require('../config/passport');

const { createUser, loginUser, logoutUser, getUserProfile } = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', asyncHandler(createUser));
router.post('/login', asyncHandler(loginUser));
router.post('/logout', asyncHandler(logoutUser));
router.get('/profile', passport.authenticate('jwt', { session: false }), asyncHandler(getUserProfile));

module.exports = router;
