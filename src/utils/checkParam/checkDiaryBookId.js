const { checkIntegerArg, checkCreatedDiaryBook, checkYourDiaryBook } = require('./');

const checkDiaryBookId = async (userId, diaryBookId) => {
  checkIntegerArg(diaryBookId);
  await checkCreatedDiaryBook(diaryBookId);
  await checkYourDiaryBook(userId, diaryBookId);
};

module.exports = checkDiaryBookId;