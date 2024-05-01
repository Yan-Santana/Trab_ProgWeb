const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('./database');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
  },
  {
    tableName: 'orders',
    sequelize: sequelizeClient,
    createdAt: false,
    updatedAt: false,
  },
);

module.exports = { Order };
