const { test, expect } = require('@playwright/test');

/*
Fixtures:
    Fixtures are global variables which are available across you project.
*/

// browser is a fixture.
test("Test 1: Browser context", async ({ browser }) => {
    // Open the browser.
    const context = await browser.newContext();

    // Open a new page
    const page = await context.newPage();

    // Go to a page.
    await page.goto("https://www.google.com");

});

// page fixture will create a browser fixture for us.
// See the above code.
test("Test 2: Page context", async ({ page }) => {
    await page.goto("https://www.google.com");
});