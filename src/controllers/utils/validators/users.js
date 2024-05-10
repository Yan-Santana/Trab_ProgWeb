const Joi = require('joi');

const userCreationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
});

const userTokenCreationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  userTokenCreationSchema,
  userCreationSchema,
};
