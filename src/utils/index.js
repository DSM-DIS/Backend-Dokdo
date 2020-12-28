const getLastPage = require('./getLastPage');
const httpErrorHandler = require('./httpErrorHandler');
const { checkDiaryBookId, checkPage } = require('./checkParam');

module.exports = {
  getLastPage,
  httpErrorHandler,
  checkDiaryBookId,
  checkPage
};