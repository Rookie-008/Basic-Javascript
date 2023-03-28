var array1 = [0,1,2,3,4,5,6,7,8,9];
var array2 = ['A','B','C','D','E'];

array1.forEach(function(element, indeks) {
	console.log('Indeks ' + (indeks + 1) + ' -> ' + element)
});

array2.forEach(function(element, indeks) {
	console.log('Indeks ' + (indeks + 1) + ' -> ' + element)
});

// Note :
// foreach -> Looping Array