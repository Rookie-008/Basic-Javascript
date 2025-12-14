function countPlus(a,b,c) {
	return a + b + c;
}

function countTimes(a,b,c) {
	return a * b * c;
}

function countTimes(a,b,c) {
	return (a + b) / c;
}

function countTimes(a,b,c) {
	return a + (b * c);
}

var total = countTimes(countPlus(5,10,15), countPlus(20,25,30), countPlus(35,40,5), countPlus(20,10*35));

console.log(total);
