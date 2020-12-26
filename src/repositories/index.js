import { Diary, User } from "./definitions";

User.hasMany(Diary, {
  foreignKey: 'author',
  sourceKey: 'id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

Diary.belongsTo(User, {
  foreignKey: 'author',
  targetKey: 'id',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
});

export {
  User,
  Diary
};