const getLastPage = require('./getLastPage');
const httpErrorHandler = require('./httpErrorHandler');
const { checkDiaryBookId, checkOwner, checkPage, checkContent } = require('./checkParam');

module.exports = {
  getLastPage,
  httpErrorHandler,
  checkDiaryBookId,
  checkOwner,
  checkPage,
  checkContent
};