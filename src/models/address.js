const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('../database');

const { User } = require('./user');

class Address extends Model {}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  },
  {
    tableName: 'addresses',
    sequelize: sequelizeClient,
    createdAt: false,
    updatedAt: false,
  },
);

Address.hasOne(User, {
  foreignKey: 'user_id',
  as: 'user',
});
User.belongsTo(Address, {
  as: 'address',
});


module.exports = { Address };
