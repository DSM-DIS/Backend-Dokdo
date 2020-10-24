const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('../config');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sequelize,
  connectDatabase
};