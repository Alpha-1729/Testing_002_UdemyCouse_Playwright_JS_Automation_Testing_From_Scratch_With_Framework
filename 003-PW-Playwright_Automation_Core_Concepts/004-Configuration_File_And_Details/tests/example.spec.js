const { test, expect } = require('@playwright/test');


// Only Test 1 will be executed.
// All the other test will be skipped.
// This feature is very useful when you are working on a new test and you want to skip all other test to save some time.
test.only("Test 1", async ({ page }) => {
    await page.goto("https://www.google.com");
});

test("Test 2", async ({ page }) => {
    await page.goto("https://www.facebook.com");
})