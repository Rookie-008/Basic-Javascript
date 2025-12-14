var string = '';

for(var i = 0; i <= 29; i++){
	for(var j = i; j <= 29; j++){
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

for(var i = 0; i <= 30; i++){
	for(var j = 1; j <= i; j++){
		string += ' ';
	}
	for(var j = i; j < 30; j++){
		string += '*';
	}
	for(var j = i; j <= 30; j++){
		string += '*';
	}
	string += '\n';
}
console.log(string);
