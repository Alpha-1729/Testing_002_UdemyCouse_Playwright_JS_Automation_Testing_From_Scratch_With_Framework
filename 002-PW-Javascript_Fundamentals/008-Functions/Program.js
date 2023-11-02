// Functions

/*
>>>>
>>>>
>>>>
>>>>
*/

function add(a, b) {
    return a + b;
}
console.log(add(3, 100));

// Creating anonymous(don't have name) function.
// Anonymous function can only be assigned to variables.
let sumOfNumbers1 = function (c, d) {
    return c + d;
};
//  OR
let sumOfNumbers2 = (c, d) => c + d;

console.log(sumOfNumbers1(2, 6));
console.log(sumOfNumbers2(2, 6));
