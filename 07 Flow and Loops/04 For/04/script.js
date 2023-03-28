var a = 0;

for ( a = 0; a <= 10; a++){
	if (a > 3 && a < 6) {
		var total1 = a + a;
		console.log(total1);
	} else if (a > 5 && a < 7){
		var total2 = (a * a) / 2 
		console.log(total2);
	} else {
		console.log("Value " + a);		
	}
}