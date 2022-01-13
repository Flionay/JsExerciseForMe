// 转换为数值
var a = "123t"
console.log(typeof a)
a = Number(a)  // Number 将a转为数字  空转为0 一旦有非数值转为NAN
console.log(a)

// 装换为数值 方法二  会省略在字符串里的非数值
a = parseInt("12a34px")
console.log(a)  //12

a = parseFloat("123.456px")
console.log(a)

// 8进制。0开头
//16 进制 0x开头

a = 070;
console.log(a) //56


//为了避免不同浏览器的解析不同
a = "070";
console.log(parseInt(a,10))

