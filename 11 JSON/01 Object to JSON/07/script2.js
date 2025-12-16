// JSON Object
var employee = {
	name : "Kentaro",
	point : 100,
	address : "Garden Street"
};

// Read Object
console.log(JSON.stringify(employee, ["name", "address"]));
