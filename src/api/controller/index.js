const router = require('express')();
const diaryController = require('./diary');

router.get('/diary-book/:id', diaryController.getDiary);
router.post('diary', diaryController.writingDiary);

module.exports = router;