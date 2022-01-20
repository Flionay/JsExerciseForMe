// 使用字面量来创建正则表达式

//var reg = new RegExp("a","i")
reg = /abcd/i;
console.log(reg.test("abc"))

// 使用一个正则表达式，检查一个字符串中是否有a或b
reg = /a|b/i;
console.log(reg.test("c a"))


// 使用一个正则表达式，检查一个字符串中是否有a或b
reg = /a|b/i; // reg=/[ab]/ 也是或者的意思
// [a-z] 任意小写字母。[A-Z] 任意大写字母 【A-z] 任意字母
reg = /[a-z]/;
console.log(reg.test("i"))
console.log("----------")


// 检查一个字符串中是否含有abc adc 或 aec
ret = /abc|adc|aec/;
console.log(ret.test('abcsdwea'))

// [^] 除了 
reg = /[^ab]/;
console.log(reg.test("a"))

// {n} 正好出现几次 {m,n} m-n次 {m,} m次以上
// 只对前一个内容起作用，想要成组 要用（）
reg = /(ab){3}/;
reg = /(ab){1,3}/; //1-3 次
console.log(reg.test("abababb"))