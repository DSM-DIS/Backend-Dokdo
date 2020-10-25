const { Diary } = require('../repositories');

const getLastPage = async (diaryBookId) => {
  const page = await Diary.findOne({
    attributes: ['page'],
    where: { diary_book_id: diaryBookId },
    order: [
      ['page', 'DESC']
    ]
  });

  return page ? page.page : 0;
};

module.exports = getLastPage;