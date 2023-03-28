var array1 = ['A', 'B', 'C', 'D', 'E'];

// var array2 = array1.slice(0);
// var array2 = array1.slice(2,5);
// var array2 = array1.slice(-3);
var array2 = array1.slice(-1);
// var array2 = array1.slice(-3, -1);

console.log(array2.join(' - '));


// Note :
// Slice -> Returns Elements in Array, as a new array
// slice(start, end);