const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const passportConfig = require('../config/passport');

const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  disableProduct,
  disableSelectedProducts,
  deleteProduct,
  deleteSelectedProducts } = require('../controllers/product.controller');

const router = express.Router();


router.get('/getAll', asyncHandler(getAllProducts));
router.get('/get/:id', asyncHandler(getProduct));
router.post('/create', asyncHandler(createProduct));
router.put('/update/:id', asyncHandler(updateProduct));
router.put('/disable/:id', asyncHandler(disableProduct));
router.put('/disable/:id', asyncHandler(disableSelectedProducts));
router.delete('/delete/:id', asyncHandler(deleteProduct));
router.delete('/delete/:id', asyncHandler(deleteSelectedProducts));

module.exports = router;
