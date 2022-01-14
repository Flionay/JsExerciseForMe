// 运算符都是有返回值的 typeof 就是一种运算符

/**
* + - * / %
* 对非数值进行计算的时候，会将非数值转换为数值进行计算
* 任何值和Nan计算 都为NaN

*/

result = 458+890;
console.log(result)

console.log(result+NaN)

// 字符串 会 进行拼接
result = "458"+"890";
console.log(result)

// 任何值做- * / 都以自动转换为Number
// 任何值跟字符串做 + 运算 都会自动转换为 字符串
result = 100-true 

result = 100+"123"

result = 2*null

result = 2*"125"
console.log(result)

// % 取模
result = 12%5
console.log(result)


// ++a 和 a++ 都会改变a的值
console.log("-------")
var a = 1
// a++返回的是 a的值 
console.log(a++)
console.log(a)

// ++a 返回的是+1后的值
var a = 1
console.log(++a)
console.log(a)

for (var a=10;a>0;--a){
	console.log(a)
}

console.log(a)



