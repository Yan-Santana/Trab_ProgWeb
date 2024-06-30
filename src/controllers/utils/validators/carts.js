const Joi = require('joi');

const addProductToCartSchema = Joi.object({
  product_id: Joi.number().positive().integer().required(),
  quantity: Joi.number().positive().integer().min(1).required(),
});

module.exports = { addProductToCartSchema };
