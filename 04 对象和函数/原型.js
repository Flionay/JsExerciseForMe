//prototype
// 每次创建一个函数，都会自动向函数中添加prototype

//function Person(name,age,gender){
//	this.name = name;
//	this.age= age;
//	this.gender =gender;
//	this.intro = function () {
//		console.log("构造函数的自我介绍： 我叫"+this.name);
//	}
//}
//
//var person1 = new Person("xx", 19, "male");
//var person2 = new Person("yy", 19, "male");
//person1.intro();
//person2.intro();

// 这样的坏处是每次new实例 都会创建新的函数
// 提到全局变量又太危险，污染全局
// 公共的方法提到 _proto_

function Person(name,age,gender){
	this.name = name;
	this.age= age;
	this.gender =gender;
	//	this.intro = function () {
	//		console.log("构造函数的自我介绍： 我叫"+this.name);
	//	}
}


var person2 = new Person("yy", 19, "male");

person2.__proto__.intro = function () {
	console.log("原型函数的自我介绍： 我叫"+this.name);
}


var person1 = new Person("xx", 19, "male");
person1.intro();
person2.intro();
