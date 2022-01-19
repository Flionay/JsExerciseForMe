var d = new Date();
// 如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的对象
console.log(d)  // 当前日期 

// 指定时间 
var date = new Date('2001-05-01 18:09:00 GMT')
console.log(date)

var date2 = date.getDate();
var month = date.getMonth();
console.log(month) // month 返回值从0开始

var time = date.getTime()
console.log(time)  //时间戳 从1970-01-01 到现在花费的毫秒数 1s = 1000ms

// 测试代码执行时间
var start = Date.now();
for(var i=0;i<100;i++){
	console.log(i);
}
var end = Date.now();
console.log(end-start)