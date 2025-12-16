var cemilan = {
	name : "Kacang Selimut",
	price : 35
};

// Replacer Function
function replace (key, value) {
	return key == 'point' ? 100 : value;
}

console.log(JSON.stringify(cemilan));
console.log(JSON.stringify(cemilan, replace));
