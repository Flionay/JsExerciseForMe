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
function sayHello (world) {
	console.log(world)
}

sayHello(null)