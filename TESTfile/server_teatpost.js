var http=require('http');

http.createServer(function(req,res){
  //post从req获取数据
  //data事件每次数据到达都触发,end最后一次触发
  var str='';
  //data,on相当于事件
  var i=0;
  req.on('data',function(data){
      console.log('第${i++}次收到数据');
      str+=data;
  });
  //end
  req.on('end',function(){
    console.log(str);
  });
}).listen(1106);
