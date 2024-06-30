const { ProductCart } = require('../models/productCart');

class CartRepository {
  async addProduct(userId, productId, quantity) {
    return await ProductCart.create({
      user_id: userId,
      product_id: productId,
      quantity,
    });
  }

  async findAllProductsByUser(userId) {
    return await ProductCart.findAll({
      where: {
        user_id: userId
      },
      include: [{
        association: 'product',
        attributes: ['name', 'price', 'old_price'],
        include: {
          association: 'photo',
          attributes: ['url']
        }
      }],
      attributes: ['quantity']
    });
  }

}

module.exports = {
  cartRepository: new CartRepository(),
};
