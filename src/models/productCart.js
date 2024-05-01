const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('../database');

const { Product } = require('./product');
const { User } = require('./user');

class ProductCart extends Model {}

ProductCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  },
  {
    tableName: 'product_carts ',
    sequelize: sequelizeClient,
    createdAt: false,
    updatedAt: false,
  },
);

/** MANY TO MANY **/
User.belongsToMany(Product, {
  through: ProductCart,
  as: 'productCart',
  foreignKey: 'user_id',
  otherKey: 'product_id',
});
Product.belongsToMany(User, {
  through: ProductCart,
  as: 'productCart',
  foreignKey: 'product_id',
  otherKey: 'user_id',
});

module.exports = { ProductCart };
