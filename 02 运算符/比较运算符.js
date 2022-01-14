// > < 
var a = 5
res = a>null
console.log(res) //true


res = a>NaN
console.log(res) //任何值跟NaN比较都是false


console.log("1"<  5)  // 字符串跟数字比较 会把字符串转化为数字进行比较
console.log("1"<  "5") // 如果符号两边都是字符串 比较按照Unicode编码进行比较
console.log("11"<  "5")  

// ----------重点-----------------
// ==  ===
// 用==来做相等运算,当两个值类型不同，则会自动转换，将其转换为相同类型，再进行比较w
console.log("=========================")
var a = 10;
//console.log(a==9)

//Nan 不和任何值相等
console.log(NaN==NaN)

console.log(undefined==null) //true

//判断b是否是NaN
console.log(isNaN(NaN))

// 使用！= 做不等于运算
console.log(10 != 10)

console.log("2" == 2) // 不同类型也会对类型进行类型变化，再比较

//为了避免这个问题 ===
console.log("123"===123)


// ---- !==
// 用来判断两个值是否不全等，不会自动做类型转换
console.log("1"!=1)
console.log("1"!==1)

