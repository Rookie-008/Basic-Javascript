// JSON Object
var data = {
	name : "A",
	point : 10,
	address : "forest"
};

// Read Object
console.log(JSON.stringify(data, ["name", "address"]));
