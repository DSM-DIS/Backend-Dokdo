const axios = require('axios').default;
const { ForbiddenDiaryBook } = require('../../errors');
const checkDiaryBookId = require('./checkDiaryBookId');

const checkOwner = async (userId, diaryBookId) => {
  await checkDiaryBookId(diaryBookId);

  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);
  if (userId !== res.owner) {
    throw ForbiddenDiaryBook;
  }
};

module.exports = checkOwner;