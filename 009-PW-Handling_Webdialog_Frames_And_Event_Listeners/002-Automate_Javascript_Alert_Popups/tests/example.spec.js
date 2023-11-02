const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // Click on accept button.

    // Event for accepting the dialog.
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    // page.on('dialog', dialog => dialog.dismiss());  // Cancel a dialog.

    // Hovering an element.
    await page.locator("#mousehover").hover();
    await page.pause();
})