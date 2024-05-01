const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('../database');

const { Order } = require('./order');
const { Product } = require('./product');

class OrderProduct extends Model {}

OrderProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  {
    tableName: 'order_products',
    sequelize: sequelizeClient,
    createdAt: false,
    updatedAt: false,
  },
);

/** MANY TO MANY **/
Order.belongsToMany(Product, {
  through: OrderProduct,
  as: 'otherProduct',
  foreignKey: 'order_id',
  otherKey: 'product_id',
});
Product.belongsToMany(Order, {
  through: OrderProduct,
  as: 'otherProduct',
  foreignKey: 'product_id',
  otherKey: 'order_id',
});


module.exports = { OrderProduct }
