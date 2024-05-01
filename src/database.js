const { Sequelize } = require('sequelize');

const sequelizeClient = new Sequelize(process.env.DATABASE_URL, {logging: false});

module.exports = { sequelizeClient};
