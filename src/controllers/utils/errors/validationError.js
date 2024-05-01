class ValidationError extends Error {
  constructor(message) {
    super('ValidationError');
    this.message = message;
    this.code = 422;
  }
}

module.exports = { ValidationError };
