var string = '';
var i = 0;
var j = 0;

for(i = 0; i < 15; i++){
	for(j = 0; j <= i; j++){
		string += '*';
	}
	string += '\n';
}

console.log(string);