var string = "Hello Hello";

// ------------------------------------------------------------------
// document.write(string);

// Count String
// document.write(string.length);

// UpperCase
// document.write(string.toUpperCase());

// LowerCase
// document.write(string.toLowerCase());

// -------------------------------------------------------------------

// Show Char from Index Position
// document.write(string.charAt(4));

// Show Index Position from Char
// document.write(string.indexOf("H")); 

// Find Char from Index
// document.write(string.lastIndexOf("H"));
// document.write(string.lastIndexOf("E"));   // --> If Char not found, returns -1

// --------------------------------------------------------------------

// Find a Specific data from String
// document.write(string.substring(0, 5));
// console.log(string.substring(0, 5));

// Check Position String From Last 
// document.write(string.endsWith("lo"))



// Show a String from Char Position
// document.write (string.substring(string.lastIndexOf("H"), string.length));
// document.write (string.substring(string.lastIndexOf("H"), string.length));

document.write (string.substring(string.indexOf("H"), string.length));
document.write (string.substring(string.lastIndexOf("H"), string.length));


