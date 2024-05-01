const { ValidationError } = require('../errors/validationError');
const { messages } = require('joi-translation-pt-br');

const validateSchema = (schema, data) => {
  const result = schema.validate(data, {
    abortEarly: true,
    convert: true,
    messages,
  });

  if (result.error) {
    throw new ValidationError(result.error.details[0].message);
  }

  return result.value;
};

module.exports = { validateSchema };
