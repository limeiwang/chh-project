var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var apiRouter = require('./api/router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', function(req, res, next){
  // cors跨域资源共享，w3c的新标准
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");  //允许的域名  * 所有或者指定某个域名
  res.header("Access-Control-Allow-Credentials", true);  // 允许跨域cookie发送
  res.header("Access-Control-Max-Age", 1000);  // 预检测的过期时间
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  //允许的请求方法
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); // 允许获取额外的header头信息
  next();
})
app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
