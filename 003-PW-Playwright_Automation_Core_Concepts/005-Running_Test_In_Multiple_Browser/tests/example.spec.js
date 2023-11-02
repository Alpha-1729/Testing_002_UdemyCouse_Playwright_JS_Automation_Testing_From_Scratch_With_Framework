const { test, expect } = require('@playwright/test');


test("Title Assert", async ({ page }) => {
    await page.goto("https://www.google.com");

    // Get the page tiitle.
    console.log(await page.title());

    // Assert the title using the expect in playwright.
    await expect(page).toHaveTitle("Google");
});