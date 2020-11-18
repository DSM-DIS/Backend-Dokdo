const { Diary } = require('../repositories');
const { BAD_REQUEST, NOT_FOUND } = require('../errors');
const { isRegisteredUser, isIntegerArg } = require('../utils');

class DiaryService {
  constructor() {
    this.diaryModel = Diary;
  }

  async getDiary(diaryBookId, page) {
    if (!isIntegerArg(diaryBookId) || !isIntegerArg(page)) {
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
    const MAX_CONTENT_LEN = 240;

    if (typeof userId !== 'string' || !await isRegisteredUser(userId)) {
      throw BAD_REQUEST;
    }
    if (typeof diaryBookId !== 'number' || diaryBookId < 1) {
      throw BAD_REQUEST;
    }
    if (typeof page !== 'number' || page < 1) {
      throw BAD_REQUEST;
    }
    if (typeof content !== 'string' || !content || content.length > MAX_CONTENT_LEN) {
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