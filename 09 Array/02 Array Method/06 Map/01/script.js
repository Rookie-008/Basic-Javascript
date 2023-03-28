var array1 = [0,1,2,3,4,5,6,7,8,9];
var array2 = ['A','B','C','D','E'];

var showArray = array1.map(function(element){
	return element * 2;
});

console.log(showArray.join(' - '));

// Note :
// map -> Creates a new array from calling a function for every array element