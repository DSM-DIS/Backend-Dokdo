const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders/database');

class Diary extends Model {
  static async getDiary(diaryBookId, page) {
    return await this.findOne({
      attributes: ['author', 'content', 'page'],
      where: {
        diary_book_id: diaryBookId,
        page
      }
    });
  }
}

Diary.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  diary_book_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING(12),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(240),
    allowNull: false
  },
  page: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'diary'
});

module.exports = Diary;