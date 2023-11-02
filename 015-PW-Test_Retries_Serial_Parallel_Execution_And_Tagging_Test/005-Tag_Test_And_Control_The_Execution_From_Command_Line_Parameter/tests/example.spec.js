const { test, expect } = require('@playwright/test');

// Skipping a test.
test.skip("@Google Google Test", async ({ page }) => {
    await page.goto("https://www.google.com");
});

test("@FB Facebook Test", async ({ page }) => {
    await page.goto("https://www.facebook.com");
});

test("@FB Instagram Test", async ({ page }) => {
    await page.goto("https://www.instagram.com");
})