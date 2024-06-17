const { Product } = require('../models/product');

class ProductRepository {
  async create(data) {
    return await Product.create(data);
  }

  async findById(id) {
    return await Product.findByPk(id, {
      attributes: { exclude: ['photo_id'] },
      include: [{ association: 'photo', attributes: ['id', 'url'] }],
    });
  }
}

module.exports = { productRepository: new ProductRepository() };
