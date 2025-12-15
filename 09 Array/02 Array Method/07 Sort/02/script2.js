var array = [0,9,5,7,3,4,2,8,1,6];

console.log(array.join(' - '));

array.sort(function(a, b){
	return a - b;
});

//array.sort(function(a, b){
//	return a + b;
//});

//array.sort(function(a, b){
//	return a * b;
//});

//array.sort(function(a, b){
	//return a / b;
//});

console.log(array.join(' - '));

// Note :
// sort -> sort element of array
