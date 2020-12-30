const router = require('express')();
const diary = require('./diary');

router.use('/', diary);

module.exports = router;