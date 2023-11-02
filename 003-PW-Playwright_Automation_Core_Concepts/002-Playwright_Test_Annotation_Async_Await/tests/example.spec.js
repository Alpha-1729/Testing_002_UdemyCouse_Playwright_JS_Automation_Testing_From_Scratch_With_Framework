const { test } = require("@playwright/test")

// Create a test.
// Use async keyword for function to properly use await in the test function.
// Here we use the anonymous function(function don't have any name).
test("First Playwright Test 1", async function () {

});

// In the newer version of JS, you can avoid the function keyword.
test("First Playwright Test 2", async () => {

});