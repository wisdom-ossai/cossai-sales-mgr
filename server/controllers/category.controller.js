const createError = require('http-errors');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const Category = require('../models/category.model');
const mongoose = require('mongoose');

module.exports = {

  // @desc Get all products
  // @route GET api/products/getAll
  // @access Authenticated user
  getAllCategories: async (req, res, next) => {
    let categories = await Category.find();

    if (!categories) {
      next(createError(404, `Categories not found`));
    } else {
      return res.status(200).json({
        Success: true,
        ErrorMessage: null,
        Results: categories
      })
    }

  },

  // @desc Get Product By ID
  // @route GET api/products/get/{product_id}
  // @access Authenticated user
  getCategory: async (req, res, next) => {
    const isIdValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (isIdValid) {
      let category = await Category.findById(req.params.id);

      if (!category) {
        next(createError(404, `Category not found`));
      } else {
        return res.status(200).json({
          Success: true,
          ErrorMessage: null,
          Results: [product]
        })
      }
    } else {
      next(createError(400, `Bad Request. Invalid Category id passed`));
    }

  },

  // @desc Create New Product
  // @route POST api/products/create
  // @access Authorized user
  createCategory: async (req, res, next) => {
    const category = await Category.create(req.body);

    if (!category) {
      next(createError(404, `Category not found`));
    } else {
      return res.status(201).json({
        Success: true,
        ErrorMessage: null,
        Results: null
      })
    }
  },

  // @desc Edit Product
  // @route PUT api/products/update/{product_id}
  // @access Authorized user
  updateCategory: async (req, res, next) => {
    let isIdValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (isIdValid) {
      let category = await Category.findById(req.params.id);
      if (!category) {
        next(createError(404, `Category not found`));
      } else {
        await req.body.name !== product.name ? product.name = req.body.name : null;
        await req.body.descrtiption !== product.descrtiption ? product.descrtiption = req.body.descrtiption : null;
        await product.save();

        res.status(201).json({
          Success: true,
          ErrorMessage: null,
          Results: null
        });
      }
    } else {
      next(createError(400, `Bad Request. Invalid Category id passed`));
    }

  },

  // @desc Delete Single Product
  // @route DELETE api/products/delete/{product_id}
  // @access Authorized user
  deleteCategory: async (req, res, next) => {
    const isIdValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (isIdValid) {
      const category = await Category.findById(req.params.id);

      if (!category) {
        next(createError(404, `Category not found`));
      } else {
        await category.remove();
        res.status(201).json({
          Success: true,
          ErrorMessage: null,
          Results: null
        });
      }
    } else {
      next(createError(400, `Bad Request. Invalid Product id passed`));
    }
  },

  // @desc Delete Multiple Products
  // @route DELET api/products/delete/{product_id}
  // @access Authorized user
  deleteSelectedCategories: async (req, res, next) => {

  },

  // @desc Disable Product
  // @route PUT api/products/disable/{product_id}
  // @access Authorized user
  disableCategory: async (req, res, next) => {
    let categories = await Category.find();


  },

  // @desc Disable Multiple categories
  // @route PUT api/categories/disable/{product_id}
  // @access Authorized user
  disableSelectedCategories: async (req, res, next) => {
    let categories = await Category.find();
  },

}
