var arr = [1,3,4,5,6,8]
for (var i=0;i<arr.length;i++){
	console.log(arr[i])
}

// forEach
// 这个需要一个函数作为输入 相当于apply
// function(value,index,arrall) 可定义三个参数 分别为当前值 当前索引 所有数组
arr.forEach(function (value,index) {
	console.log(index+" is "+value)
},)

// slice 切片
console.log(arr.slice(0,4))

// concat join sort等方法用到去查就行