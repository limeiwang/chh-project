var express = require('express');
var router = express.Router();
var user = require('../controller/user');

router.post('/user/login', user.login);
// router.get('/user/msgCode', user.msgCode);
// router.post('/user/address', user.addAddress);

// router.get('/category/list', category.list);

module.exports = router;
