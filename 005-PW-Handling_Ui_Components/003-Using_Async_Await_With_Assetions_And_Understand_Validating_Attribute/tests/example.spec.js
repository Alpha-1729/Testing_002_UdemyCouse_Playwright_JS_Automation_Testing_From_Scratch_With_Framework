const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    // Check whether there is a blinking text in the UI.
    // In this case we look for a attribute value class="blinkingText".
    await expect(documentLink).toHaveAttribute("class", "blinkingText");

    await page.pause();

})