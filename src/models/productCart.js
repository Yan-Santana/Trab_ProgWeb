const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('./database');

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

module.exports = { ProductCart };
