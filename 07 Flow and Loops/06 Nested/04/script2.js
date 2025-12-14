var string = '';
var i = 30;
var j = 0;
var k = 30;
var l = 0;

for(i = 30; i > 0; i--){
	for(j = 0; j < i; j++){
		string += '*';
	}
	string += '\n';
}

for(k = 0; k < 30; k++){
	for(l = 0; l <= k; l++){
		string += '*';
	}
	string += '\n';
}


console.log(string);
