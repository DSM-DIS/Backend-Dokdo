const { Diary } = require('../../repositories');
const DiaryService = require('../../services/diary');
const diaryService = new DiaryService(Diary);

const { BAD_REQUEST } = require('../../errors');

const getDiary = async (req, res) => {
  try {
    if (!Object.keys(req.query).length) {
      throw BAD_REQUEST;
    }
    const page = parseInt(req.query.page);
    const diaryBookId = parseInt(req.params.id);
    if (isNaN(page) || isNaN(diaryBookId)) {
      throw BAD_REQUEST;
    }

    const data = await diaryService.getDiary(diaryBookId, page);
    res.send(data);
  } catch (error) {
    res.status(error.status).send({
      message: error.message
    });
  }
};

const writingDiary = async (req, res) => {
  try {
    if (!Object.keys(req.body).length) {
      throw BAD_REQUEST;
    }
    const { userId, content } = req.body;
    const diaryBookId = parseInt(req.body.diaryBookId);
    const page = parseInt(req.body.page);
    if (isNaN(diaryBookId) || isNaN(page)) {
      throw BAD_REQUEST;
    }

    await diaryService.writingDiary(userId, diaryBookId, page, content);
    res.status(201).send();
  } catch (error) {
    res.status(error.status).send({
      message: error.message
    });
  }
};

module.exports = {
  getDiary,
  writingDiary
};