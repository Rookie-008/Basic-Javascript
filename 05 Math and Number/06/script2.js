var a = '15';

// 1
console.log(15 + a);

// 2
console.log(25 + parseInt(a));


var b = 'Value is 15';

// 3 
console.log(parseInt(b));  // Return NaN -> parseInt only looks at the first value.

var c = '25 is Value' 

// 4 
console.log(parseInt(c));  // Return 5 -> first value is 5.
