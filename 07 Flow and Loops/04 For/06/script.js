var total = 10;
var a = 0;

for (a = 0; a < 10; a++){
	if (a < 5) {
		if (a > 1 && a < 3) {
			console.log('A');
		} else {
			console.log('A' + a);
		}
	} else if (a >= 5){
		if (a > 6 && a < 8) {
			console.log('B');
		} else {
			console.log('B' + a);
		}
	} else {
		console.log('Not Exist');
	}
}