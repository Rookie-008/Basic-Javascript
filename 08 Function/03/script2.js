function countPlus(a,b) {
	return a + b;
}

function countTimes(a,b) {
	return a * b;
}

var total = countTimes(countPlus(1,2), countPlus(3,4));

console.log(total);
