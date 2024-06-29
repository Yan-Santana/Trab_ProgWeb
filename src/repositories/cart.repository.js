const { ProductCart } = require('../models/productCart');

class CartRepository {
  async addProduct(userId, productId, quantity) {
    return await ProductCart.create({
      user_id: userId,
      product_id: productId,
      quantity,
    });
  }
}

module.exports = {
  cartRepository: new CartRepository(),
};
