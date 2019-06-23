//测试get方式获取前台数据
const http=require('http');
const querystring=require('querystring');

http.createServer(function(req,res){
  var GET={};
  if(req.url.indexOf('?')!=-1){
    var arr=req.url.split('?');
    var url=arr[0];
    GET=querystring.parse(arr[1]);
  }else{
    var url=req.url;
  }


  console.log(url,GET);
  //responsen to web
  res.write('aaa');
  res.end();
}).listen(1103);
