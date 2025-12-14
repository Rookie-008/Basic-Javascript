function valueTotal(a, b, c){
	var A;
	var B;
	var C;
	var total;

	A = a * a * a;
	B = b * b / 2;
	C = (c + c) / 2 * c;

	total = A + B + C;

	return total;
}

console.log(valueTotal(5, 5, 5));
