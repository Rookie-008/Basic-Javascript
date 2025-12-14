function valueTotal() {
	var value = 0;
	for ( var i = 0; i < arguments.length; i++) {
		value -= arguments[i];
	}

	return value/arguments.length;
}

var average = valueTotal(5,10,15);
console.log(average); 
// alert(average); 
