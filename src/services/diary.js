const { Diary } = require('../repositories');
const { CONTENT_LEN } = require('../config/attribute');
const { BAD_REQUEST, NOT_FOUND } = require('../errors');
const { isIntegerArg, isStringArg } = require('../utils');

class DiaryService {
  constructor() {
    this.diaryModel = Diary;
  }

  async readingDiary(diaryBookId, page) {
    if (!isIntegerArg(diaryBookId) || !isIntegerArg(page)) {
      throw BAD_REQUEST;
    }

    const data = await this.diaryModel.readingDiary(diaryBookId, page);

    if (!data) {
      throw NOT_FOUND;
    }
    return data;
  }

  async writingDiary(userId, diaryBookId, page, content) {
    if (!isIntegerArg(diaryBookId) || !isIntegerArg(page)) {
      throw BAD_REQUEST;
    }
    if (!isStringArg(content) || content.length > CONTENT_LEN) {
      throw BAD_REQUEST;
    }

    await this.diaryModel.writingDiary(diaryBookId, userId, content, page);
  }
}

module.exports = DiaryService;