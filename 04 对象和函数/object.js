// new 
var obj = new Object();
obj.name="孙悟空";
obj.age="18";


// obj[属性名]=属性值 这种方式更加灵活
obj['hello'] = "hi";
var hello = "hi";
obj[hello]="hi";
console.log(obj[hello])

// function 
var fun = new Function('console.log("thisisfunction")')
fun()

// 声名函数
// 形式参数 不需要规定 变量类型 就相当于var 
// 函数的实参 可以是任意类型
function sayHello (world) {
	console.log(world)
}

sayHello(null);


function mySum(a,b,c) {
	var d = a+b+c;
	return d;
}

console.log(mySum(1,3,4))

// 参数过多时，通过对象进行传递

// 匿名函数

+function(){
	console.log("a")
}()