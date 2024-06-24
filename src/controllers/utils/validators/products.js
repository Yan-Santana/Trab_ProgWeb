const Joi = require('joi');

const createProductValidadorSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().integer().positive().required(),
  old_price: Joi.number().integer().positive().required(),
  stock: Joi.number().integer().positive().required(),
  rating: Joi.number().integer().min(0).max(5).required(),
});

const listProductValidadorSchema = Joi.object({
  page: Joi.number().integer().positive().default(0),
  limit: Joi.number().integer().positive().default(10),
  category: Joi.string(),
  orderByPrice: Joi.string().valid("desc", "asc"),
  name: Joi.string(),
})

module.exports = { createProductValidadorSchema, listProductValidadorSchema };
