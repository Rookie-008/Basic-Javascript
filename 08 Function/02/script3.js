function valueTotal(a, b, c, d, e){
	var A;
	var B;
	var C;
	var D;
	var E;
	var total;

	A = a * a * a;
	B = b * b / 2;
	C = (c + c) / 2 * c;
	d = d * d / 3;
	e = 2 * (e + e)

	total = A + B + C + D + E;

	return total;
}

console.log(valueTotal(20, 20, 20, 20, 20));
