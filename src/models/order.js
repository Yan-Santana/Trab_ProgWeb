const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('./database');

const { Payment } = require('./payment');
const { User } = require('./user');
const { Address } = require('./address');

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

/** USER FK - ONE TO MANY **/
User.hasMany(Order, {
  foreignKey: 'user_id',
  as: 'order',
});
Order.belongsTo(User, {
  as: 'user',
});

/** ADDRESS FK - ONE TO MANY **/
Address.hasMany(Order, {
  foreignKey: 'address_id',
  as: 'order',
});
Order.belongsTo(Address, {
  as: 'address',
});

/** PAYMENT FK **/
Order.hasOne(Payment, {
  foreignKey: 'payment_id',
  as: 'payment',
});
Payment.belongsTo(Order, {
  as: 'order',
});


module.exports = { Order };
