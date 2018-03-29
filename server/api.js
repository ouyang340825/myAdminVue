var models = require('./db');//数据库链接信息
var express = require('express');
var nanoid = require('nanoid');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlfun');//sql语句

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  console.log("数据库连接开始")
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 登录用户接口
router.post('/login', (req, res) => {
  var sql = $sql.user.login;
  var params = req.body;
  console.log("sql:",sql);
  console.log("params:",params);
  conn.query(sql, [params.username], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  /*var id=nanoid();*/
  console.log("sql:",sql);
  console.log("params:",params);
  conn.query(sql, [params.username,params.userpsw], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
module.exports = router;
