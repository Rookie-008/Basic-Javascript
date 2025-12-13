var total = 50;
var a = 0;

for (a = 0; a < 30; a++){
	if (a < 25) {
		if (a > 10 && a < 15) {
			console.log('No Matter How Hard The Past, You Can Always Begin Again');
		} else {
			console.log('Where There Is Love, There Is Life' + a);
		}
	} else if (a >= 25){
		if (a > 35 && a < 40) {
			console.log('When You Get Tired, Learn To Rest, Not Quit');
		} else {
			console.log('If Something Is Wrong, Train Yourself Not To Worry, Worry Fixes Nothing' + a);
		}
	} else {
		console.log('Not Exist');
	}
}
