var SQL_demo2 = require('./SQL_demo2');
SQL_demo2.sql('select * from websites',function(err,result){
  if (err) {
    console.log(err);
    return;
  }
  console.log('用户总数为 :',result.length);
});
