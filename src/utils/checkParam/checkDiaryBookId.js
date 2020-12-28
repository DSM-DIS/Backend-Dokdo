const { checkIntegerArg, checkCreatedDiaryBook, checkYourDiaryBook } = require('./');

const checkDiaryBookId = async (diaryBookId) => {
  checkIntegerArg(diaryBookId);
  await checkCreatedDiaryBook(diaryBookId);
  await checkYourDiaryBook(diaryBookId);
};

module.exports = checkDiaryBookId;