const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('./database');

class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    discounts: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    card_number: DataTypes.STRING,
  },
  {
    tableName: 'payments',
    sequelize: sequelizeClient,
    createdAt: false,
    updatedAt: false,
  },
);

module.exports = { Payment }
