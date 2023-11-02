// Variables

/*
>>>> Difference between var and let.
        We cannot redeclare variable with let keyword but possible with var keyword.
>>>>
>>>>
>>>>
*/

// Variables in javascript are loosely typed.
var name = "Peter";

// let and const are introduced in ES6 engine.
let age = 3;
const villaNumber = 23;

// Print the type of a variable.
let gpa = 9.65;
let balance = 1000;
console.log(typeof age);
console.log(typeof balance);

// Boolean variables.
let isRequired = true;

// null variables.
let hasBalance = null;
console.log(typeof hasBalance); // Type is object.

// undefined variables.
let travelTime;
console.log(typeof travelTime); // Type is undefined.

// Addition
let num1 = 20;
let num2 = 34;
let result = num1 + num2;
console.log(result);

// Negation operator.
let isChild = true;
console.log(!isChild);
