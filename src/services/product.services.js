const { productRepository } = require('../repositories/product.repository');

class ProductServices {
  async create(data) {
    return await productRepository.create(data);
  }

  async getById(id) {
    return await productRepository.findById(id);
  }
}

module.exports = { productServices: new ProductServices() };
