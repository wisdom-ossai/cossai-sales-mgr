const express = require('express');
const asyncHandler = require('express-async-handler');

const { createUser, loginUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', asyncHandler(createUser));
router.post('/login', asyncHandler(loginUser));


module.exports = router;
