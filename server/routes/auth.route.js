const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require('passport');

const { createUser, loginUser, logoutUser, getUserProfile } = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', asyncHandler(createUser));
router.post('/login', asyncHandler(loginUser));
router.get('/profile', passport.authenticate('jwt', { session: false }), asyncHandler(getUserProfile));
router.post('/logout', asyncHandler(logoutUser));


module.exports = router;
