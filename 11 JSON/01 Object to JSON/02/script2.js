// Simple JSON
var menu = `{
	[
		{
			name : "Es Cendol",
			point : 35
		}
	],
	[
		{
			name : "Es Kerupuk",
			point : 40
		}	
	],
	[
		{
			name : "Es Buah",
			point : 40
		}
	],
	[
		{
			name : "Es Boba",
			point : 35
		}	
	],
	[
		{
			name : "Es Pisang Ijo",
			point : 35
		}	
	]
}`;

// Simple Object to JSON
console.log(JSON.stringify(menu, null, 10));
