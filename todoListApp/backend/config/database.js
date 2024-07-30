const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Esta es la ubicación donde se almacenará la base de datos SQLite
});

module.exports = sequelize;