var array = [0,9,5,7,3,4,2,8,1,6];
var showArray = array.filter(function(x) {
	return x > 5;
});

console.log(showArray.join(' - '));

// Note :
// filter -> Creates a new array from calling a function for every array element
