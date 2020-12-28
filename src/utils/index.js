const getLastPage = require('./getLastPage');
const httpErrorHandler = require('./httpErrorHandler');
const { checkDiaryBookId } = require('./checkParam');

module.exports = {
  getLastPage,
  httpErrorHandler,
  checkDiaryBookId
};