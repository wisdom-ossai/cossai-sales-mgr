const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const Product = require('../models/product.model');

module.exports = {

  // @desc Get all products
  // @route GET api/products/getAll
  // @access Authenticated user
  getAllProducts: async (req, res, next) => {
    let products = await Product.find();

    return res.status(200).json({
      Success: true,
      ErrorMessage: null,
      Results: products
    })

  },
  // @desc Get Product By ID
  // @route GET api/products/get/{product_id}
  // @access Authenticated user
  getProduct: async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    return res.status(200).json({
      Success: true,
      ErrorMessage: null,
      Results: [product]
    })
  },
  // @desc Create New Product
  // @route POST api/products/create
  // @access Authorized user
  createProduct: async (req, res, next) => {
    let product = await Product.create(req.body);

    return res.status(201).json({
      Success: true,
      ErrorMessage: null,
      Results: null
    })
  },

  // @desc Edit Product
  // @route PUT api/products/update/{product_id}
  // @access Authorized user
  updateProduct: async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    req.body.type !== product.product_type ? product.product_type = req.body.type : null;
    req.body.name !== product.name ? product.name = req.body.name : null;
    req.body.regular_price !== product.regular_price ? product.regular_price = req.body.regular_price : null;
    req.body.short_description !== product.short_description ? product.short_description = req.body.short_description : null;
    req.body.description !== product.description ? product.description = req.body.description : null
    // req.body.categories.map(val => {
    //   val !=
    // })
    product.save();

    res.status(201).json({
      Success: true,
      ErrorMessage: null,
      Results: null
    })

  },
  // @desc Delete Single Product
  // @route DELET api/products/delete/{product_id}
  // @access Authorized user
  deleteProduct: async (req, res, next) => {
    let products = await Product.find();


  },
  // @desc Delete Multiple Products
  // @route DELET api/products/delete/{product_id}
  // @access Authorized user
  deleteSelectedProducts: async (req, res, next) => {
    let products = await Product.find();


  },
  // @desc Disable Product
  // @route PUT api/products/disable/{product_id}
  // @access Authorized user
  disableProduct: async (req, res, next) => {
    let products = await Product.find();


  },
  // @desc Disable Multiple Products
  // @route PUT api/products/disable/{product_id}
  // @access Authorized user
  disableSelectedProducts: async (req, res, next) => {
    let products = await Product.find();


  },

}
