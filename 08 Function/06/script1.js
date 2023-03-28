function valueTotal(n) {
	if (n === 0) {
		// console.log('A');
		return;
	}
	console.log(n);
	return valueTotal(n-1);
}

valueTotal(10);