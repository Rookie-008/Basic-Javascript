var a = '5';

// 1
console.log(5 + a);

// 2
console.log(5 + parseInt(a));


var b = 'Value is 5';

// 3 
console.log(parseInt(b));  // Return NaN -> parseInt only looks at the first value.

var c = '5 is Value' 

// 4 
console.log(parseInt(c));  // Return 5 -> first value is 5.
