var obj = new Object();

obj.name="sun";
obj.age=19;

obj.intro = function () {
	console.log(obj.name+obj.age)
}

obj.intro()


var obj2 = {
	name:"chen",
	age:12,
	introduction:function () {
		console.log(this.name,this.age)
	}
}

obj2.introduction()

// 循环遍历 对象
for (var n in obj2){
	console.log(obj2[n])
}