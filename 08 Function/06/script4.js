function valueTotal(n) {
	if (n === 0) {
		return 1;
	}

	console.log(n * 2);
	// console.log(n * n);
	
	return valueTotal(n-1);

}

valueTotal(30);
