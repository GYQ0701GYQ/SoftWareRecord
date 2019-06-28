/*
测试连接sqlserver的事物机制
2016年7月22日15:51:52
 */
var async  = require('async');
var dbTransaction = require('./dbTransaction.js');
var searchid=11;
dbTransaction.getTransaction(function(sql, transaction){
	//开启事物
	transaction.begin(function(err) {

		if (err) {
			console.log(err);
			return;
		}
		//定义一个变量,如果自动回滚,则监听回滚事件并修改为true,无须手动回滚
    var rolledBack = false;

    //监听回滚事件
    transaction.on('rollback', function(aborted) {
    	console.log('监听回滚');
	    console.log('aborted值 :', aborted);
	    rolledBack = true;
    });

    //监听提交事件
    transaction.on('commit', function() {
    	console.log('监听提交');
	    rolledBack = true;
    });

    var request = new sql.Request(transaction);
    //insert test1----------------------------------------------------------------------------------------------------------------------------
    var task1 = function(callback){
  		request.query("insert into test1 (id,name, age) values ('11','a1', 101)", function(err, result) {
  			if (err) {
  				console.log(err);
  				callback(err, null);
  				return;
  			}
        console.log('--------------------第1条语句成功------INSERT----------------------------');
        console.log('UPDATE affectedRows',result.rowsAffected);
  			callback(null, result)
  		})
  	};
    //insert test2 begin----------------------------------------------------------------------------------------------------------------------------
  	var task2 = function(callback){
  		request.query("insert into test1 (id,name, age) values ('22','a2', 444)", function(err, result) {
  			if (err) {
  				console.log(err);
  				callback(err, null);
  				return;
  			}
        console.log('--------------------第2条语句成功------INSERT----------------------------');
        console.log('UPDATE affectedRows',result.rowsAffected);
  			callback(null, result)
  		})
  	};
    //insert test3 begin----------------------------------------------------------------------------------------------------------------------------
  	var task3 = function(callback){
  		request.query("insert into test1 (id,name, age) values ('33','a3', 301)", function(err, result) {
  			if (err) {
  				console.log(err);
  				callback(err, null);
  				return;
  			}
        console.log('--------------------第3条语句成功------INSERT----------------------------');
        console.log('UPDATE affectedRows',result.rowsAffected);
  			callback(null, result)
  		})
  	};
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
    //update test5----------------------------------------------------------------------------------------------------------------------------
    var task5= function(callback){
      request.query("UPDATE test1 SET name ='a2',age =201 WHERE id =22", function(err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
          return;
        }
        console.log('--------------------第5条语句成功------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result.rowsAffected);
        console.log('-----------------------------------------------------------------\n\n');
        callback(null, result)
      })
    };
//detete test6----------------------------------------------------------------------------------------------------------------------------
var task6= function(callback){
	//var sqlsen="DELETE FROM test1 where id=11";
	var id=22;
	var sqlsen="DELETE FROM test1 where id="+id;
	request.query(sqlsen, function(err, result) {
  //request.query("DELETE FROM test1 where id=11", function(err, result) {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    console.log('--------------------第6条语句成功------DELETE----------------------------');
    console.log('DELETE affectedRows',result.rowsAffected);
    console.log('-----------------------------------------------------------------\n\n');
    callback(null, result)
  })
};

    async.series([task4,task6,task4,task2,task4,task5,task4],function(err,result){
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
	});
})
