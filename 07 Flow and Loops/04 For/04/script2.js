var a = 0;

for ( a = 0; a <= 30; a++){
	if (a > 5 && a < 10) {
		var total1 = a + a;
		console.log(total1);
	} else if (a > 15 && a < 20){
		var total2 = (a * a) / 2 
		console.log(total2);
	} else if (a > 25 && a < 30){
		var total3 = (a * a) / 4 
		console.log(total2);		
	}  else {
	    console.log("Value " + a);
	}
}
