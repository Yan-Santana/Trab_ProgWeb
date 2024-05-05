const { ValidationError } = require('./validationError');
const { BadRequest } = require('./badRequest');

const treatError = (error) => {
  if (error instanceof ValidationError || error instanceof BadRequest) {
    return {
      error: error.message,
      code: error.code,
    };
  }

  console.log(error);

  return {
    error: 'Internal server error',
    code: 500,
  };
};

module.exports = { treatError };
