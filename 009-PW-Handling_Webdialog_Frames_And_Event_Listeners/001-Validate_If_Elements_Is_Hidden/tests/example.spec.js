const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // Back and forward navigation in playwright.
    // await page.goto("https://www.google.com");
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();
    page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

})