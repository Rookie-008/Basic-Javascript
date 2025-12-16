// Simple JSON
var menu = `{
	[
		{
			name : "Kacang Bawang",
			point : 35
		}
	],
	[
		{
			name : "Kacang Polong",
			point : 40
		}	
	],
	[
		{
			name : "Kacang Koro",
			point : 35
		}
	],
	[
		{
			name : "Kacang Atom",
			point : 40
		}	
	],
	[
		{
			name : "Kacang Mede",
			point : 40
		}	
	]
}`;

// Simple Object to JSON
console.log(JSON.stringify(menu, null, 10));
