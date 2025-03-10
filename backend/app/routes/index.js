const router = require('express').Router({ mergeParams: true });
const admin = require('./admin');
const auth = require('./auth');
const { emailTest } = require('./testRoutes/emailTest');
const tinyURL = require('./tinyURL');
const broadcast = require('./broadcast');

router.use('/admin', admin);
router.use('/auth', auth);
router.post('/emailTest', emailTest);
router.use('/', tinyURL);
router.use('/broadcast', broadcast);
module.exports = router;
