var express = require('express');
var router = express.Router();
var conf = require('../config/db.js');

/* GET users listing. */
router.post('/login', function (request, response, next) {
  console.log(request)
  const {
    name,
    password
  } = request.body;
  conf.query('select * from user where name=? and password=?', [
    name,
    password
  ], (err, res) => {
    if (err) { console.log(err) }
    if (res.length >= 1) {
      res.json({
        'msg': '登录成功'
      })
    } else {
      res.status(422).json({
        'msg': '用户名或密码错误！'
      });
    }
  })
});

module.exports = router;
