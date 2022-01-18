// 创建数组
// 1. new
var arr = new Array();
arr[0] = 123;

//2. []

var arr = [];
console.log(arr)  //typeof 检查数组 输出 object

// 使用字面量创建数组是，可以在创建时就指定数组中的元素

var arr = [1,2,3,4,5,10]
console.log(arr[2])
console.log(arr.length)

// 什么都能存  定好长度 增加也不回报错

var arr2 = new Array(3)
arr2[4]= "第四个"
console.log(arr2[5])
arr2[7] = "第七个"
console.log(arr2[6])

