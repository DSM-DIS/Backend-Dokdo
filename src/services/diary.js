const { BAD_REQUEST, NOT_FOUND } = require('../errors');
const { isRegisteredUser } = require('../utils');

class DiaryService {
  constructor(diaryModel) {
    this.diaryModel = diaryModel;
  }

  async getDiary(diaryBookId, page) {
    if (typeof diaryBookId !== 'number' || diaryBookId < 1) {
      throw BAD_REQUEST;
    }
    if (typeof page !== 'number' || page < 1) {
      throw BAD_REQUEST;
    }

    const data = await this.diaryModel.findOne({
      attributes: ['author', 'page', 'content'],
      where: {
        diary_book_id: diaryBookId,
        page
      }
    });

    if (!data) {
      throw NOT_FOUND;
    }
    return data;
  }

  async writingDiary(userId, diaryBookId, page, content) {
    if (typeof userId !== 'string' || !await isRegisteredUser(userId)) {
      throw BAD_REQUEST;
    }
    if (typeof diaryBookId !== 'number' || diaryBookId < 1) {
      throw BAD_REQUEST;
    }
    if (typeof page !== 'number' || page < 1) {
      throw BAD_REQUEST;
    }
    if (typeof content !== 'string' || !content) {
      throw BAD_REQUEST;
    }

    await this.diaryModel.create({
      diary_book_id: diaryBookId,
      author: userId,
      content,
      page
    });
  }
}

module.exports = DiaryService;