// String And Methods

/*
>>>>
>>>>
>>>>
>>>>
*/

let day = "tuesday ";

// Get the length of the string.
console.log(day.length);

// Substring
let subDay = day.slice(0, 3);
console.log(subDay);

// String indexing.
console.log(subDay[0]);

// Split the string.
let splitDay = day.split("s");
console.log(splitDay[0]);
console.log(splitDay[1]);

// Trim
console.log(day.trim());

// String to int.
let intString = parseInt("125");
console.log(typeof intString);

// Int to string.
console.log(parseInt(intString));

// String concatenation.
console.log("Hello " + "World");

// Find the first index of a sub-string.
// Output will be -1,  if string is not found.
console.log("Hello World".indexOf("World"));
console.log("Hello World".indexOf("l", 5)); // It will search after the 5th index.
