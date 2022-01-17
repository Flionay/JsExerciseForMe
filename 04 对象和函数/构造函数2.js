function Person(name,age,gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.sayName = function () {
		console.log("hello 我是"+this.name)
		
	}
}

var per1 = new Person("小明", 12, "man")
var per2 = new Person("红红", 12, "man")
per1.sayName()
per2.sayName()

// 构造函数有什么问题呢？
/**
在Person构造函数中都有一个sayName方法
	目前我们的方法都是在构造函数内部创建的，也就是构造函数每执行一次都会创建一个新的sayName方法
*/
	
console.log(per1.sayName() == per2.sayName())

// 这样就导致了构造函数每执行一次都会创建一个新方法，没有必要创建这么多相同的方法，完全可以使所有的实例对象共享同一个方法

function Person(name,age,gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.sayName =fun; 
}

function fun() {
	console.log("hello 我是"+this.name)
	
}


var per1 = new Person("小明", 12, "man")
var per2 = new Person("红红", 12, "man")
per1.sayName()
per2.sayName()
console.log(per1.sayName() == per2.sayName())