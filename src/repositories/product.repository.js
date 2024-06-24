const { Op } = require('sequelize');
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

  async findAll(params) {
    const where = {}; //objeto
    const order = []; //array
    const limit = params.limit;
    const page = params.page;

    if (params.category){
      where.category = params.category;
    }

    if (params.orderByPrice){
      order.push(['price', params.orderByPrice])
    }

    if (params.name){
      where.name = {[Op.iLike]:`%${params.name}%`}
    }

    return await Product.findAll({
      where, order, limit, offset: (limit * page),
      include: [{
        association: 'photo',
        attributes: ['url']
      }],
      attributes: {
        exclude: ['photo_id']
      }

    });

  }
}

module.exports = { productRepository: new ProductRepository() };
