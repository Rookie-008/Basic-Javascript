var string = '';

for(var i = 0; i <= 5; i++){
	for(var j = i; j <= 5; j++){
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

for(var i = 0; i <= 6; i++){
	for(var j = 1; j <= i; j++){
		string += ' ';
	}
	for(var j = i; j < 6; j++){
		string += '*';
	}
	for(var j = i; j <= 6; j++){
		string += '*';
	}
	string += '\n';
}
console.log(string);