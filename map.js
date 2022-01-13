  let book = new Map([["two","java编程思想"],["three","javascript"]]);
  book.set("one","平凡的世界")
  //获取
  console.log(book.get("two"));
  // 循环读取
  for (let [key,value] of book){
    h=`${key}=${value}`;
    console.log(h);
  }

var names=new Map([["kobe",23],["james",45]]);
for (let [name,age] of names){
  console.log(`${name}:${age}`)
}