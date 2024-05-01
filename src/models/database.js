import { Sequelize } from 'sequelize';

const sequelizeClient = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false,
});

module.exports = { sequelizeClient };
