const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('../config');

import { Sequelize } from "sequelize";
import * as config from "../config";

export const sequelize = new Sequelize(
  config.mysql.DB_NAME,
  config.mysql.DB_USER,
  config.myslq.DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      timestamps: false
    }
  }
);

export default async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error(`mysql connection error: ${error.message}`);
    process.exit(1);
  }
};