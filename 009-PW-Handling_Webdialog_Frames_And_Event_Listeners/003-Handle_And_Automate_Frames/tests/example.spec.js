const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const framePage = page.frameLocator("#courses-iframe");

    // Click on the visible element in the UI.
    await framePage.locator("li a[href*='lifetime-access']:visible").click();

    // Print the subscriber count.
    const textCheck = await framePage.locator(".text h2").textContent();
    const subCount = textCheck.split(" ")[1];
    console.log(subCount);
    
    await page.pause();
})