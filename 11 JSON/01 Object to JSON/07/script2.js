// JSON Object
var employee = {
	name : "Bruce Lee",
	point : 100,
	address : "Garden Street"
};

// Read Object
console.log(JSON.stringify(employee, ["name", "address"]));
