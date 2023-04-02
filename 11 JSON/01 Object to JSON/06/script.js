var data = {
	name : "A",
	point : 10
};

// Replacer Function
function replace (key, value) {
	return key == 'point' ? 100 : value;
}

console.log(JSON.stringify(data));
console.log(JSON.stringify(data, replace));