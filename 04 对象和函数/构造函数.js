// 构造函数和普通函数的不通过
// 1. 首字母大写。2. 调用方式不同，构造函数需要使用new关键字调用
// 构造函数的执行流程： 1. 创建一个新对象  2.将新建的对象设置为函数中的this   3.执行函数中的代码 4.将新对象返回
function Person() {
	this.name="job";
	this.age="18";
	this.sayName = function (){
		console.log(this.name)
		return "return"
	}

}

var per = new Person();
per.sayName()


function Dog(name,age) {
	this.name=name;
	this.age=age;
	this.sayName = function (){
		console.log(this.name)
		
	}
	
}

var dog1 = new Dog("旺财",12);
var dog2 = new Dog("doudou",12);
dog2.sayName()

// 这里留有一个疑问 为什么不用class 非要用构造函数？

console.log(dog1 instanceof Dog)

/**
this 情况
当以函数执行的时候，this指向window
当以方法执行的时候，this指向方法的类
当以构造函数执行的时候，this指向类实例
*/