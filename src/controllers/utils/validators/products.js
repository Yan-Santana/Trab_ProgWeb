const Joi = require("joi");

const createProductValidadorSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().integer().positive().required(),
  old_price: Joi.number().integer().positive().required(),
  stock: Joi.number().integer().positive().required(),
  rating: Joi.number().integer().positive().required()
});

module.exports = {createProductValidadorSchema};
