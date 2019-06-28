//var dbTransaction = {};
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

//function callback(sql,transaction);

function forCP(err)
{
    //以err为参数:定义了transaction和callback
  this.transaction = new sql.Transaction(connection);
  this.callback(sql,transaction);
}
//以回调函数为参数的function：获取事物
function getTransaction(callback)
{
  this.connection = new sql.ConnectionPool(config, forCP);
};

module.exports = dbTransaction;
