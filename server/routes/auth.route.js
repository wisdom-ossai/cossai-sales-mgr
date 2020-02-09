const express = require('express');
const asyncHandler = require('express-async-handler');

const { createUser, loginUser, logoutUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', asyncHandler(createUser));
router.post('/login', asyncHandler(loginUser));
router.post('/logout', asyncHandler(logoutUser));


module.exports = router;
