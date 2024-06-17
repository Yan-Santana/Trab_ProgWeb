const { productRepository } = require("../repositories/product.repository");

class ProductServices {
  async create(data) {
    return await productRepository.create(data);
  }
}

module.exports = { productServices: new ProductServices() };
