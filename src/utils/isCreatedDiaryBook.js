const { Diary } = require('../repositories');

const isCreatedDiaryBook = async (diaryBookId) => {
  const isCreated = await Diary.findOne({
    where: { diary_book_id: diaryBookId }
  });

  return isCreated ? true : false;
};

module.exports = isCreatedDiaryBook;