// 语法
// var 变量 = new RegExp（“正则表达式”，“匹配模式”）
// 检查一个字符串中是否含有a 大小写严格区分
var reg = new RegExp("a");

var str = "babc";
// test 方法 检查字符串是否符合正则表达式的规则，如果符合就是true。不符合就是false
var result = reg.test(str)
console.log(result)


// 检查一个字符串中是否含有a 根据匹配模式规定是否区分
// i 忽略大小写。g 全局匹配
var reg = new RegExp("a");