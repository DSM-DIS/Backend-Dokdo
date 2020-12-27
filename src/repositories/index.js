const { User, Diary } = require('./definitions');

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

module.exports = {
  User,
  Diary
};