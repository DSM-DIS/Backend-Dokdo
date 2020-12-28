const axios = require('axios').default;
const { httpErrorHandler } = require('../');

const checkCreatedDiaryBook = async (diaryBookId) => {
  const res = await axios.get(`/repositories/diary-books/${diaryBookId}`);
  httpErrorHandler(res.status, res.cause);
};

module.exports = checkCreatedDiaryBook;