const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('./database');

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

module.exports = { OrderProduct }
