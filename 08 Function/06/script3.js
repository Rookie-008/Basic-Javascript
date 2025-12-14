function valueTotal(n) {
	if (n === 0) {
		// console.log('Love Is Blind, But A Broken Heart Sees Everything');
		return;
	}
	console.log(n);
	return valueTotal(n-1);
}

valueTotal(30);
