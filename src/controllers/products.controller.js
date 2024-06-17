const { productServices } = require('../services/product.services');
const { treatError } = require('./utils/errors');
const { validateSchema } = require('./utils/validators');
const { createProductValidadorSchema } = require('./utils/validators/products');

class ProductsController {
  async create(req, res) {
    try {
      const validatedData = validateSchema(createProductValidadorSchema, req.body);
      const newProduct = await productServices.create( {...validatedData, photo_id: req.dbFile?.id} );
      return res.status(201).json(newProduct);
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }
}

module.exports = {
  productsController: new ProductsController(),
};
