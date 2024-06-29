const { cartServices } = require('../services/cart.services');
const { treatError } = require('./utils/errors');

const { validateSchema } = require('./utils/validators');
const { addProductToCartSchema } = require('./utils/validators/carts');

class CartsController {
  async addProduct(req, res) {
    try {
      const validatedData = validateSchema(addProductToCartSchema, req.body);
      const { product_id, quantity } = validatedData;
      const result = await cartServices.addProductToCart(req.user.id, product_id, quantity);

      return res.status(201).json(result);
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }
}

module.exports = { cartsController: new CartsController() };
