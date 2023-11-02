// Array Functions

/*
>>>>
>>>>
>>>>
>>>>
*/

let marks = new Array(1, 2, 3, 4, 5, 6);

// reduce function.
// Find the total of all marks.
let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

// filter function.
// Store the even numbers in the array into another array.
let evenMarks = marks.filter((mark) => mark % 2 == 0);

// map function.
// Multiply each element in the array with 3.
let mappedMarks = marks.map((mark) => mark * 3);

// Chaining functions.
let finalMarks = marks
    .filter((mark) => mark % 2 == 0)
    .map((mark) => mark * 3)
    .reduce((sum, mark) => sum + mark, 0);

console.log(finalMarks);
