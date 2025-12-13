var total = 25;
var rangeMin = 15;
var a = 0;

for(a = 0; a <= total; a++ ) {	
	if (a <= rangeMin) {
		console.log('Value ' + a);
		var rangeMax = rangeMin + 1;
	} else if (a === rangeMax) {
		console.log('Value ' + a + ', Range Limit');
	} else {
		console.log('Out Of Range');
	}
}
