var sum=0;
for (var i=0; i<100; i++){
	if (i%2!=0){
		sum+=i
		
	}
}
console.log(sum)

for (var i=1;i<10;i++) {
	for (var j=1; j<10; j++){
		if (i<j){
//			console.log(String(i))
			console.log(i+"*"+j+"="+i*j);
		}
		
	}
	console.log("\n");
}