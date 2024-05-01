const { ValidationError } = require('./validationError');

const treatError = (error) => {
  if (error instanceof ValidationError) {
    return {
      error: error.message,
      code: error.code,
    };
  }

  return {
    error: 'Internal server error',
    code: 500,
  };
};

module.exports = { treatError };
