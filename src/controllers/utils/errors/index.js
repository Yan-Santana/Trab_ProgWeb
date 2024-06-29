const { ValidationError } = require('./validationError');
const { BadRequest } = require('./badRequest');
const { InvalidToken } = require('./InvalidToken');
const { NotFound } = require('./notFound');

const treatError = (error) => {
  if (
    error instanceof NotFound ||
    error instanceof ValidationError ||
    error instanceof BadRequest ||
    error instanceof InvalidToken
  ) {
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
