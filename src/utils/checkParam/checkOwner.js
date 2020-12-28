const axios = require('axios').default;
const { ForbiddenDiaryBook } = require('../../errors');
const { checkDiaryBookId, httpErrorHandler } = require('../');

const checkOwner = async (userId, diaryBookId) => {
  await checkDiaryBookId(diaryBookId);

  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);
  httpErrorHandler(res.status, res.cause);

  if (userId !== res.owner) {
    throw ForbiddenDiaryBook;
  }
};

module.exports = checkOwner;