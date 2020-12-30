const Axios = require('axios').default;
const { baseURL } = require('../../config');
const { ForbiddenDiaryBook } = require('../../errors');
const checkDiaryBookId = require('./checkDiaryBookId');

const axios = Axios.create({
  baseURL: baseURL.jeonju,
  timeout: 1000
});

const checkOwner = async (userId, diaryBookId) => {
  await checkDiaryBookId(diaryBookId);

  const res = await axios.get(`/repositories/diay-books/${diaryBookId}`);
  if (userId !== res.data.owner) {
    throw ForbiddenDiaryBook;
  }
};

module.exports = checkOwner;