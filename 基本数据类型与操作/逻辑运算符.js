// ---------------逻辑运算符------------------

// 与&& 或|| 非!  == ===
var b =0;
if ((a==0) && (b==0)){
	console.log("pass")
}

// 如果对非布尔值进行逻辑运算 首先会将其转换为boolean
var flag = true;
flag = !flag
console.log(flag)

// && 短路运算 如果第一个为false 则不会看第二个

// ｜｜ 或 短路的 第一个为true 第二个不会看


