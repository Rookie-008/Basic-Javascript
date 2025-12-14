var string = '';

for(var i = 0; i < 20; i++){
	for(var j = 0; j <= i; j++){
		string += '*';
	}
	string += '\n';
}

for(var i = 20; i > 0; i--){
	for(var j = 0; j < i; j++){
		string += '*';
	}
	string += '\n';
}

console.log(string);
