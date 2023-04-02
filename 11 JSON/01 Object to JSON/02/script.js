// Simple JSON
var menu = `{
	[
		{
			name : "A",
			point : 100
		}
	],
	[
		{
			name : "B",
			point : 100
		}	
	]
}`;

// Simple Object to JSON
console.log(JSON.stringify(menu, null, 4));