const { treatError } = require('./utils/errors');

class ProductsController {
  async create(req, res) {
    try {
      return res.status(201).json({
        ...req.dbFile,
      });
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }
}

module.exports = {
  productsController: new ProductsController(),
};
