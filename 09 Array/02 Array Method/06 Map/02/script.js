var array1 = [0,1,2,3,4,5,6,7,8,9];
var array2 = ['A','B','C','D','E'];

array1.map(function(element, indeks) {
	console.log('Indeks ' + (indeks + 1) + ' -> ' + element * 3)
});

array2.map(function(element, indeks) {
	console.log('Indeks ' + (indeks + 1) + ' -> ' + element)
});

// Note :
// map -> Creates a new array from calling a function for every array element