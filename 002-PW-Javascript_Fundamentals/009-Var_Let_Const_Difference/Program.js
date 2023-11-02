// Var Let Const Difference

/*
>>>>
>>>>
>>>>
>>>>
*/

// Var keyword.
// Scope of var keyword is at global/functional level.
var greeting = "Morning";

if (true) {
    var greeting = "Noon";
}

console.log(greeting);

// Let keyword.
// Scope of the let keyword is at global/ block {} level.
if (true) {
    let message = "Hello";
}

// Const keyword.
// Const is same like let, but it cannot be re declared.
