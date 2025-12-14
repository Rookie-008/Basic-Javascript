var string = '';
var i = 0;
var j = 0;
var k = 0;
var l = 0;

for(i = 0; i < 30; i++){
	for(j = 0; j <= i; j++){
		string += '*';
	}
	string += '\n';
}

for(k = 30; k > 0; k--){
	for(l = 0; l < k; l++){
		string += '*';
	}
	string += '\n';
}

console.log(string);
