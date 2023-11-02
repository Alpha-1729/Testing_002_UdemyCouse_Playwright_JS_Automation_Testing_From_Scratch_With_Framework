const { test, expect } = require('@playwright/test');

// Skipping a test.
test.skip("Google Test", async ({ page }) => {
    await page.goto("https://www.google.com");
});

test("Facebook Test", async ({ page }) => {
    await page.goto("https://www.facebook.com");
});

test("Instagram Test", async ({ page }) => {
    await page.goto("https://www.instagram.com");
})