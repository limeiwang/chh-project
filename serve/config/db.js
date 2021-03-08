// config/db.js
// MySQL数据库联接配置
var mysql = require('mysql');
var connection = mysql.createConnection({
    protocol: 'http',
    host: 'localhost',
    prot: 3306,
    user: 'root',
    password: '111111',
    database: 'chenghui_system'
})

connection.connect( (error) => {
    if (error) {
      console.log('链接失败',error)
    } else {
      console.log('链接成功')
    }
});
  
module.exports = connection