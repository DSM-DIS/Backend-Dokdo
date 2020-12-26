import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../loaders/database";

class User extends Model {}

User.init({
  id: {
    type: DataTypes.STRING(12),
    primaryKey: true
  },
  pw: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'user'
});

export { User };