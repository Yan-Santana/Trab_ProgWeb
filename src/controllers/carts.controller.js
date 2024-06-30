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

  async listCartItems(req, res) {
    try {
      const cart = await cartServices.listAllProductsByUser(req.user.id);
      return res.status(200).json(cart);
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }

  async buy(req, res) {
    try {
      const result = await cartServices.buy(req.user.id);
      return res.status(200).json(result);
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }
}

module.exports = { cartsController: new CartsController() };
