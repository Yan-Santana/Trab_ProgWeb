const { BadRequest } = require('../controllers/utils/errors/badRequest');
const { NotFound } = require('../controllers/utils/errors/notFound');

const { productRepository } = require('../repositories/product.repository');
const { cartRepository } = require('../repositories/cart.repository');

class CartServices {
  async addProductToCart(userId, productId, quantity) {
    const product = await productRepository.findById(productId);

    if (!product) throw new NotFound('Produto');
    if (product.stock < quantity)
      throw new BadRequest('Quantidade solicitada fora de estoque, estoque atual: ' + product.stock);

    cartRepository.addProduct(userId, productId, quantity);
    return { message: 'Produto adicionado ao carrinho com sucesso' };
  }

  async listAllProductsByUser(userId) {
    const cart = await cartRepository.findAllProductsByUser(userId);

    const total = cart.reduce( (acc, currentValue) => acc + (currentValue.toJSON().product.price * currentValue.toJSON().quantity), 0);
    const subtotal = cart.reduce( (acc, currentValue) => acc + (currentValue.toJSON().product.old_price * currentValue.toJSON().quantity), 0);
    const discount = subtotal - total;

    return {
      total,
      discount: discount>0 ? discount : 0,
      products: cart
    };

  }

}

module.exports = {
  cartServices: new CartServices(),
};
