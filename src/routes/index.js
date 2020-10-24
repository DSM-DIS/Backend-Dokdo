const router = require('express')();
const diary = require('./diary');

router.use('/repositories', diary);

module.exports = router;