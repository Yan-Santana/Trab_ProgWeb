const { Product } = require("../models/product");

class ProductRepository {
  async create(data) {
    return await Product.create(data);
  }
}

module.exports = { productRepository: new ProductRepository() };
