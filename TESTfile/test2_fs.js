//用到aa.txt和bb.txt,测试读文件写文件
const fs=require('fs');
//readfile(filename)
/*
fs.readFile('aa.txt',function(err,data){
  if(err){
    console.log('读取失败');
  }else {
    console.log(data.toString());
  }
});
*/
//writefile(filename,内容，回调)
fs.writeFile('bb.txt','gfcyugbhwedx',function(err){
  console.log(err);
})
