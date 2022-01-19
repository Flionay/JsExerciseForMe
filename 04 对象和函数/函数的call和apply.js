// 函数对象的两个方法 call 和apply
function fun (a,b){
	console.log(this.name);
	console.log(a+b)
}

fun()

//call
fun.call();


//apply
fun.apply()

// 这两方法有什么用呢

// 1. call 和 apply 可以将一个对象指定为一个参数
// 此时 这个对象将会成为函数执行时的this

var obj = {
	name :"123",
}
fun.call(obj)

// call方法可以将实参依次在第一个对象参数之后传递
// apply() 方法需要将实参封装到数组中传递，
fun.apply(obj,[2,3])
