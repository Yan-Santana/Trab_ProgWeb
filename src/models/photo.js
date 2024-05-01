const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('../database');

class Photo extends Model {}

Photo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: DataTypes.STRING,
  },
  {
    tableName: 'photos',
    sequelize: sequelizeClient,
    createdAt: false,
    updatedAt: false,
  },
);

module.exports = { Photo };
