// let a = 10;      // Not allowed => Variable "let" cannot be redeclared, must declared before use, have block scope
// let a = 20;      // Not allowed => Variable "let" cannot be redeclared, must declared before use, have block scope

// var a = 10;   
// var a = 20;     // Allowed => Variable "var" can be redeclared

const a = 10;      // Not allowed => Variable "const" cannot be redeclared, cannot be reassigned, have block scope
const a = 20;      // Not allowed => Variable "constt" cannot be redeclared, cannot be reassigned, have block scope

//const a = 30;      // Not allowed => Variable "const" cannot be redeclared, cannot be reassigned, have block scope
//const a = 40;      // Not allowed => Variable "constt" cannot be redeclared, cannot be reassigned, have block scope

//const a = 50;      // Not allowed => Variable "const" cannot be redeclared, cannot be reassigned, have block scope
//const a = 60;      // Not allowed => Variable "constt" cannot be redeclared, cannot be reassigned, have block scope

console.log(a);
