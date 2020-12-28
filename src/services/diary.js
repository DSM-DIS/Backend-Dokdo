const { Diary } = require('../repositories');
const { checkDiaryBookId, checkOwner, checkPage, checkContent } = require('../../utils');

class DiaryService {
  constructor() {
    this.diaryModel = Diary;
  }

  async readingDiary(userId, diaryBookId, page) {
    // error handler
    await checkDiaryBookId(userId, diaryBookId);
    await checkPage(page);

    return await this.diaryModel.readingDiary(diaryBookId, page);
  }

  async writingDiary(userId, diaryBookId, page, content) {
    await this.diaryModel.writingDiary(diaryBookId, userId, content, page);
  }
}

module.exports = DiaryService;