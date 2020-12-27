const { Sequelize } = require('sequelize');
const config = require('../configs');

const sequelize = new Sequelize(
  config.mysql.name,
  config.mysql.username,
  config.myslq.password,
  {
    host: config.mysql.host,
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      timestamps: false
    }
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error(`mysql connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = {
  sequelize,
  connectDatabase
};