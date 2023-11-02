// Array

/*
>>>>
>>>>
>>>>
>>>>
*/

// Initializing an array.
let marks = Array(6);

// Creating an array.
let ages = new Array(1, 2, 3, 4, 5, 6);
// OR
let numbers = [1, 2, 3, 4, 5, 6];

// Indexing in an array.
console.log(numbers[1]);

// Updating array values.
numbers[0] = 23;

// Length of the array.
console.log(numbers.length);

// Append an element to the array.
numbers.push(23);

// Adding an element to the start of the array.
numbers.unshift(34);

// Remove last element in the array.
numbers.pop();

// Getting the index of an element in an array.
console.log(numbers.indexOf(34));

// Search for an element in an array.
console.log(numbers.includes(34));

// Getting sub-arrays from arrays.
let subArray = numbers.slice(2, 5); // End is not included.
console.log(subArray);
