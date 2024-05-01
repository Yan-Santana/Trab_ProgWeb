const { Sequelize } = require('sequelize');

const sequelizeClient = new Sequelize('postgres://postgres:minhasenha@localhost:5432/lyfm', {logging: false});

module.exports = { sequelizeClient};
