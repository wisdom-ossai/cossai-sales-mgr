const createError = require('http-errors');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const Category = require('../models/category.model');
const mongoose = require('mongoose');

module.exports = {

  getAllCategories: async (req, res, next) => {
    const categories = await Category.find();

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
          Results: [category]
        })
      }
    } else {
      next(createError(400, `Bad Request. Invalid Category id passed`));
    }

  },

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

  updateCategory: async (req, res, next) => {
    let isIdValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (isIdValid) {
      let category = await Category.findById(req.params.id);
      if (!category) {
        next(createError(404, `Category not found`));
      } else {
        await req.body.name !== category.name ? category.name = req.body.name : null;
        await req.body.descrtiption !== category.descrtiption ? category.descrtiption = req.body.descrtiption : null;
        await category.save();

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
      next(createError(400, `Bad Request. Invalid Category id passed`));
    }
  },

  deleteSelectedCategories: async (req, res, next) => {

  },

  disableCategory: async (req, res, next) => {
    let categories = await Category.find();


  },

  disableSelectedCategories: async (req, res, next) => {
    let categories = await Category.find();
  },

}
