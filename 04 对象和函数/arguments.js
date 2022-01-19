// 在调用函数时，浏览器每次都会传递进两个隐含的参数
//1. 函数的上下文对象this
//2. 封装实际参数的对象arguments
//	- arguments 是一个类数组对象 就是args的全拼
//  - arguments[0]
//  - arguments.callee 当前正在执行的函数对象

function fun() {
//	console.log(arguments instanceof Array)
//	console.log(Array.isArray(arguments))
	console.log(arguments.length)
	console.log(arguments[1])
}

fun(1,"2",3)