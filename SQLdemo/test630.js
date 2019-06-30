var SQL_demo2 = require('./demo630');
var express = require('express');
var async  = require('async');

var app = express();//web相关
var results=[];

SQL_demo2.sql('select * from user_',function(err,result){
  if (err) {
    console.log(err);
    return err;
  }
  console.log('fir\n',result,'\n');
  results=result.recordset;
  console.log('sec\n',results,'\n');
  app.get('/',function (req, res) {//和页面交互相关
            res.send(result);  //这里必须用res.send,因为有数据返回到客户端
  })
});
app.listen(3033);
// var res=SQL_demo2.sql('select * from user_',async function(err,result){
//   if (err) {
//     console.log(err);
//     return await err;
//   }
//   console.log(result);
//   return await result;
// });
//   res.then((ret)=>{
//   console.log(ret); } )
// function print(){
//   console.log('third\n',results);
// }
