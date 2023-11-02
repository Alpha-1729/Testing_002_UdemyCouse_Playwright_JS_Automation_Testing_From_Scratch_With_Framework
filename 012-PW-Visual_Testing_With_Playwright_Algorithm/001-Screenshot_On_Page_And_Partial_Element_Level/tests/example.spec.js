const { test, expect } = require('@playwright/test');

test("Screenshot and visual comparison", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    await expect(page.locator("#displayed-text")).toBeVisible();

    // Element level screenshot.
    await page.locator("#displayed-text").screenshot({ path: 'partialScreenshot.png' })

    await page.locator("#hide-textbox").click();

    // Page level screenshot.
    await page.screenshot({ path: 'screenshot.png' });

    await expect(page.locator("#displayed-text")).toBeHidden();
});