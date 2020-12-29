const checkIntegerArg = require('./checkIntegerArg');
const checkCreatedDiaryBook = require('./checkCreatedDiaryBook');
const checkYourDiaryBook = require('./checkYourDiaryBook');

const checkDiaryBookId = async (userId, diaryBookId) => {
  checkIntegerArg(diaryBookId);
  await checkCreatedDiaryBook(diaryBookId);
  await checkYourDiaryBook(userId, diaryBookId);
};

module.exports = checkDiaryBookId;