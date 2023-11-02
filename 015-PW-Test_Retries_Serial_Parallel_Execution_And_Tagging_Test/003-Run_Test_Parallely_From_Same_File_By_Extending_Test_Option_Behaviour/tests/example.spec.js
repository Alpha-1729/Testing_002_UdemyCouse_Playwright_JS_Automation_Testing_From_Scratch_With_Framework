const { test, expect } = require('@playwright/test');

// Running Test in parallel mode.
test.describe.configure({ mode: 'parallel' });

// Running test in serial mode.
// test.describe.configure({ mode: 'serial' });

test("Google Test", async ({ page }) => {
    await page.goto("https://www.google.com");
});

test("Facebook Test", async ({ page }) => {
    await page.goto("https://www.facebook.com");
});

test("Instagram Test", async ({ page }) => {
    await page.goto("https://www.instagram.com");
})