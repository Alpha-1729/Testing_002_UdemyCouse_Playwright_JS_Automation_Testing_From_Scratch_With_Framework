const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    console.log(page.title());

    // Selectors supported in playwright -> css and xpath.
    // Email field.
    await page.locator("#username").fill("admintest@gmail.com")
    await page.locator("#password").fill("admintest")
    await page.locator("#signInBtn").click()

    // Grabbing the error message.
    let errorMessage = await page.locator("[style*='block']").textContent();
    console.log(errorMessage);

    // Asserting the error message.
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
})