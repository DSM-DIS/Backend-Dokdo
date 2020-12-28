const { Diary } = require('../../repositories');
const DiaryService = require('../../services/diary');
const diaryService = new DiaryService();
const { BadRequest } = require('../../errors');
const { checkDiaryBookId, checkOwner, checkPage, checkContent } = require('../../utils');

const getDiary = async (req, res, next) => {
  try {
    const userId = req.headers.userId;
    const diaryBookId = parseInt(req.params.id);
    const page = parseInt(req.params.page);

    // error handler
    await checkDiaryBookId(userId, diaryBookId);
    await checkPage(page);

    const data = await diaryService.readingDiary(diaryBookId, page);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const writingDiary = async (req, res, next) => {
  try {
    const userId = req.headers.userId;
    const diaryBookId = parseInt(req.params.id);
    const { content } = req.body;

    // error handler
    await checkOwner(userId, diaryBookId);
    checkContent(content);

    await diaryService.writingDiary(userId, diaryBookId, content);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDiary
};