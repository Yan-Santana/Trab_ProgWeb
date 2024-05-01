const { Model, DataTypes } = require('sequelize');
const { sequelizeClient } = require('../database');

const { Photo } = require('./photo');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    old_price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    photo_id: DataTypes.INTEGER,
  },
  {
    tableName: 'products',
    sequelize: sequelizeClient,
    createdAt: false,
    updatedAt: false,
  },
);

Product.hasOne(Photo, {
  foreignKey: 'photo_id',
  as: 'photo',
});
Photo.belongsTo(Product, {
  as: 'product',
});

module.exports = { Product };
