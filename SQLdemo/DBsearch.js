//var dbTransaction = {};
var sql = require('mssql');
var async  = require('async');
var rolledBack=false;
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

//以回调函数为参数的function：获取事物
function getTransaction(callback)
{
  var connection = new sql.ConnectionPool(config, function forCP(err)
  {
    //以err为参数:定义了transaction和callback
    var transaction = new sql.Transaction(connection);
    callback(sql,transaction);
  })
};
function funsearch(sql,transaction)
{
  transaction.begin(function(err){
    //监听提交事件
    transaction.on('commit',function(){
      console.log('监听提交');
      rolledBack = true;
    });
    var request = new sql.Request(transaction);
    //search test4 begin----------------------------------------------------------------------------------------------------------------------------
    var task4 = function(callback){
      request.query('select * from test1',function(err,result) {
        if (err) {
          console.log(err);
          callback(err, null);
          return;
        }
        console.log('--------------------第4条语句成功------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');
        callback(null, result)
      })
    };

    async.series([task4],function(err,result){
    //async.series([task4],function(err,result){
      //设置错误测试回滚用
      //var err = "11";
      if (err) {
        console.log('出现错误,执行回滚');
        if (!rolledBack) {

          //如果sql语句错误会自动回滚,如果程序错误手动执行回滚,不然事物会一致挂起.
          transaction.rollback(function(err) {
            if (err) {

            console.log('rollback err :',err);
            return;
            }
            console.log('回滚成功');
          });
        }
      } else {
        console.log('无错误,执行提交');
        //执行提交
        transaction.commit(function(err) {
          if (err) {

          console.log('commit err :',err);
          return;
          }
          console.log('提交成功');
        });
      }
    })


  })
}
module.exports={
  getTransaction,funsearch
};
//getTransaction(funsearch);
