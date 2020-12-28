const { BadRequest } = require('../../errors');
const { checkCreatedDiaryBook, checkIntegerArg } = require('./');

const checkDiaryBookId = async (diaryBookId) => {
  checkIntegerArg(diaryBookId);
  await checkCreatedDiaryBook(diaryBookId);
  
};