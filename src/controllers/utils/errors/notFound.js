class NotFound extends Error {
  constructor(entity) {
    super('NotFound');
    this.message = entity + ' não encontrado';
    this.code = 404;
  }
}

module.exports = { NotFound };
