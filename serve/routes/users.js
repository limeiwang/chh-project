var express = require('express');
var router = express.Router();
var conf = require('../config/db.js');

/* GET users listing. */
router.post('/login', function (request, response, next) {
  const {
    name,
    password
  } = request.body;
  conf.query('select * from user where username=? and password=?', [name, password], (err, res) => {
    if (err) { console.log(err) }
    if (res.length >= 1) {
      response.json({
        code: 0,
        msg: '登录成功'
      })
    } else {
      response.json({
        code: 1,
        msg: '用户名或密码错误！'
      });
    }
  })
});


router.post('/purchase/add', function (request, response, next) {
  const {
    code, type, name, supplier, spec, count, price
  } = request.body;

  conf.query('insert into purchase (code, type, name, supplier, spec, count, price) values (?,?,?,?,?,?,?)', 
    [code, type, name, supplier, spec, count, price], (err, res) => {
    if (err) { console.log(err) }
    if (res) {
      response.json({
        code: 0,
        msg: '操作成功'
      })
    } else {
      response.json({
        code: 1,
        msg: '操作失败'
      });
    }
  })
});

router.post('/purchase/list', function (request, response, next) {
  const {
    pageIndex,
    pageSize
  } = request.body;
  conf.query('select * from purchase limit ?,?', 
    [pageIndex, pageSize], (err, res) => {
    if (err) { console.log(err) }
    if (res.length) {
      response.json({
        code: 0,
        msg: '操作成功',
        data: res
      })
    } else {
      response.json({
        code: 1,
        msg: '操作失败',
        data: []
      });
    }
  })
});

router.get('/purchase/del', function (request, response, next) {
  const { id } = request.query;
  conf.query('delete from purchase where id=?', [id], (err, res) => {
    console.log('res:', res);
    if (err) { console.log(err) }
    if (res) {
      response.json({
        code: 0,
        msg: '删除成功'
      })
    } else {
      response.json({
        code: 1,
        msg: '删除失败'
      });
    }
  })
});

module.exports = router;
