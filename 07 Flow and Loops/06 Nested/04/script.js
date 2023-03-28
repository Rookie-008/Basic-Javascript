var string = '';
var i = 15;
var j = 0;

for(i = 15; i > 0; i--){
	for(j = 0; j < i; j++){
		string += '*';
	}
	string += '\n';
}

console.log(string);