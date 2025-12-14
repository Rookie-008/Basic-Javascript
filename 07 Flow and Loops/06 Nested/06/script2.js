var string = '';

for(var i = 0; i <= 20; i++){
	for(var j = i; j <= 20; j++){
		string += ' ';
	}
	for(var j = 0; j < i; j++){
		string += '*';
	}
	for(var j = 0; j <= i; j++){
		string += '*';
	}
	string += '\n';

}

console.log(string);
