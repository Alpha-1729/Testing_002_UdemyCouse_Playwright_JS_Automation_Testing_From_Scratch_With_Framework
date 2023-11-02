const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    await page.goto("https://www.google.com");
})