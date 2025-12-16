const json = `{
	"employes" : 
	[
		{
			"name" : "Bruce Lee",	
			"point" : 100			
		}, 
		{
			"name" : "Hulk Hogan",	
			"point" : 100			
		},
			{
			"name" : "Heath Ledger",	
			"point" : 100			
		} 
	]
}`;

const data = JSON.parse(json);

console.log(data);
