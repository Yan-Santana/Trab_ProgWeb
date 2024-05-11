class InvalidToken extends Error {
  constructor() {
    super("InvalidToken");
    this.message = "Token inválido";
    this.code = 401; // Unauthorized
  }
}

module.exports = { InvalidToken };
