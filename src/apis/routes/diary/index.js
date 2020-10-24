const router = require('express')();
const controller = require('./controller');

router.get('/diary-book/:id', controller.getDiary);
router.post('/diary', controller.writingDiary);

module.exports = router;