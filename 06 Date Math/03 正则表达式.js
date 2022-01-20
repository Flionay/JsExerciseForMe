var str = "1a3bdsdffe";

/*
* split() 根据任意字符 拆分字符串
*/
var result = str.split("3");
var result = str.split(/[^A-z]/)


// search() 可以搜索字符串是否含有指定内容
str = "hello hi good";
result = str.search(/h[ie]/);


// match() 根据正则表达式 从一个字符中将符合条件的内容提取出来
// 默认情况match会找到第一个符合要求的内容，找到以后就会停止检索
// 设置正则表达式为全局模式，将会匹配到所有内容
// 返回数组
result = str.match(/hi/gi);



// replace() 可以将字符串中指定内容替换为新的内容
// 参数： 1. 被替换的内容，2. 新内容
// 默认只替换第一个 可以接收正则表达式
//result = str.replace("h","@_@")
result = str.replace(/h/gi, "@_@")
console.log(result)