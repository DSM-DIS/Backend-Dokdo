import { Sequelize } from "sequelize";
import * as config from "../config";

export const sequelize = new Sequelize(
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

export default async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error(`mysql connection error: ${error.message}`);
    process.exit(1);
  }
};