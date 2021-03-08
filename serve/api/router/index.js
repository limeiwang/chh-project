var express = require('express');
var router = express.Router();
var user = require('../controller/user');
var shopping = require('../controller/shopping');

router.post('/login', user.login);

// shopping相关
router.post('/shopping/list', shopping.list);
router.post('/shopping/add', shopping.add);
router.get('/shopping/del', shopping.del);



module.exports = router;
