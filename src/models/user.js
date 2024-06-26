const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('../database');

//const { Address } = require('./address');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    role: DataTypes.ENUM("customer", "admin"),
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    //address_id: DataTypes.INTEGER,
  },
  {
    tableName: 'users',
    sequelize: sequelizeClient,
    createdAt: "created_at",
    updatedAt: false,
  },
);


module.exports = { User };
