function valueTotal() {
	var value = 0;
	for ( var i = 0; i < arguments.length; i++) {
		value -= arguments[i];
	}

	return value/arguments.length;
}

var average = valueTotal(1,2,3);
console.log(average); 
// alert(average); 