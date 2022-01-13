// > < 
var a = 5
res = a>null
console.log(res) //true


res = a>NaN
console.log(res) //任何值跟NaN比较都是false


console.log("1"<  5)  // 字符串跟数字比较 会把字符串转化为数字进行比较
console.log("1"<  "5") // 如果符号两边都是字符串 比较按照Unicode编码进行比较
console.log("11"<  "5")  

