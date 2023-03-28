function valueTotal(a, b){
	var A;
	var B;
	var total;

	A = a * a * a;
	B = b * b / 2;

	total = A + B;

	return total;
}

console.log(valueTotal(4, 4));