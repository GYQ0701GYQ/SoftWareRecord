var mssql = require('mssql');
var SQL_demo2 = {};
var config = {
 user: "NODE1",
 password: "NODE1NODE1",
 server: "localhost",
 database: "TravelWeb",
 port:1433,
 options: {
  encrypt: true // Use this if you're on Windows Azure
 },
 pool: {
  min: 0,
  max: 1000,
  idleTimeoutMillis: 3000
 }
}
//执行sql,返回数据.
SQL_demo2.sql = function (sql, callBack) {
 var connection = new mssql.ConnectionPool(config, function (err) {
  if (err) {
   console.log(err);
   return;
  }
  var ps = new mssql.PreparedStatement(connection);
  ps.prepare(sql, function (err) {
   if (err){
    console.log(err);
    return;
   }
   ps.execute(sql, function (err, result) {
    if (err){
     console.log(err);
     return;
    }
    ps.unprepare(function (err) {
     if (err){
      console.log(err);
      callback(err,null);
      return;
     }
      callBack(err, result);
    });
   });
  });
 });
};
module.exports = SQL_demo2;
