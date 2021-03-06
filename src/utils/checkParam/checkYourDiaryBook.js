const Axios = require('axios').default;
const { baseURL } = require('../../config');
const { ForbiddenDiaryBook } = require('../../errors');

const axios = Axios.create({
  baseURL: baseURL.gyeongsang,
  timeout: 1000
});

const checkYourDiary = async (userId, diaryBookId) => {
  const res = await axios.get('/diary-book', {
    headers: { userId: userId }
  });

  for (const diaryBook of res.data.diaryBooks) {
    if (diaryBook.id === diaryBookId) {
      return;
    }
  }
  throw ForbiddenDiaryBook;
};

module.exports = checkYourDiary;