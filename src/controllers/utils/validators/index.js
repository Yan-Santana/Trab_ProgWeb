const { ValidationError } = require('../errors/validationError');

const validateSchema = (schema, data) => {
  const result = schema.validate(data, {
    abortEarly: true,
    convert: true,
  });

  if (result.error) {
    throw new ValidationError(result.error.details[0].message);
  }

  return result.value;
};

module.exports = { validateSchema };
