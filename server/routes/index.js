const express = require('express');
const authRoutes = require('./auth.route');
const productRoutes = require('./product.route');
const categoryRoutes = require('./product.route');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
