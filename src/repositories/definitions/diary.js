const { DataTypes, Model } = require('sequelize');
const { stringLen } = require('../../config');
const { sequelize } = require('../../loaders/database');

class Diary extends Model {
  static async readingDiary(diaryBookId, page) {
    return await this.findOne({
      where: {
        diary_book_id: diaryBookId,
        page: page
      }
    });
  }

  static async writingDiary(diaryBookId, userId, content, page) {
    await this.create({
      diary_book_id: diaryBookId,
      author: userId,
      content: content,
      page: page
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
    type: DataTypes.STRING(stringLen.author),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(stringLen.content),
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