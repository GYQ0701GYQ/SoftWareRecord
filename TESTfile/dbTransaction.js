/*
nodejs连接sqlserver数据库支持事物封装
2016年7月22日15:46:22
QQ : 452076103 意外金喜
 */
var dbTransaction = {};
var sql = require('mssql');
//数据库配置
var config = {
  user: "NODE1",
  password: "NODE1NODE1",
  server: "localhost",
  database: "NODEsql_1",
  port:1434,
  options: {
    encrypt: true // Use this if you're on Windows Azure
  },
  pool: {
    min: 0,
    max: 10,
    idleTimeoutMillis: 3000
  }
};

dbTransaction.getTransaction = function(callback){

  var connection = new sql.ConnectionPool(config, function (err) {

    var transaction = new sql.Transaction(connection);

    callback(sql, transaction);
  })
};

module.exports = dbTransaction;
