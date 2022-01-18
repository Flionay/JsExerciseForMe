// 增删改查
// push 相当于append
var arr=[1,2,3,4];
arr.push(5)
console.log(arr)
var arr2 = [7,8,9]
arr.push(arr2)
console.log(arr)
// pop 删除最后一个
var res = arr.pop()
console.log(arr)
console.log(res)

//unshift  添加到第一个
arr.unshift("new one")
console.log(arr)
//shift 删除第一个
arr.shift("new one")
console.log(arr)