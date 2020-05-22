const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const passportConfig = require('../config/passport');

const {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  disableCategory,
  disableSelectedCategories,
  deleteCategory,
  deleteSelectedCategories } = require('../controllers/category.controller');

const router = express.Router();


router.get('/getAll', asyncHandler(getAllCategories));
router.get('/get/:id', asyncHandler(getCategory));
router.post('/create', asyncHandler(createCategory));
router.put('/update/:id', asyncHandler(updateCategory));
router.put('/disable/:id', asyncHandler(disableCategory));
router.put('/disable/:id', asyncHandler(disableSelectedCategories));
router.delete('/delete/:id', asyncHandler(deleteCategory));
router.delete('/deletemany/:id', asyncHandler(deleteSelectedCategories));

module.exports = router;
