const json = `{
	"employes" : 
	[
		{
			"name" : "A",	
			"point" : 100			
		}, 
		{
			"name" : "B",	
			"point" : 100			
		} 
	]
}`;

const data = JSON.parse(json);

console.log(data);