const express = require('express');
const asyncHandler = require('express-async-handler');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', asyncHandler(insert));

async function insert (req, res, next) {
  const reqBody = req.body;
  console.log('registering user', user);
  const user = userController.insert(reqBody);
  res.json(user);
}

module.exports = router;
