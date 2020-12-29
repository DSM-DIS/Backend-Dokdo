const { BadRequest } = require('../../errors');
const checkIntegerArg = require('./checkIntegerArg');
const { getLastPage } = require('../');

const checkPage = async (diaryBookId, page) => {
  checkIntegerArg(page);
  if (await getLastPage(diaryBookId, page) < page) {
    throw BadRequest;
  }
};

module.exports = checkPage;