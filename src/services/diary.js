const { stringLen } = require('../config');
const { Diary } = require('../repositories');

class DiaryService {
  constructor() {
    this.diaryModel = Diary;
  }

  async readingDiary(diaryBookId, page) {
    return await this.diaryModel.readingDiary(diaryBookId, page);
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