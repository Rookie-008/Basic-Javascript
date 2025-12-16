// JSON Object
var data = {
	name : "Nathan",
	point : 100,
	address : "Garden Street"
};

// Read Object
console.log(JSON.stringify(data, ["name", "address"]));
