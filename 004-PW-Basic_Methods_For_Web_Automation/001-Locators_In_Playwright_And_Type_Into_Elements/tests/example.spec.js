const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {

    await page.goto("https://www.facebook.com/login/");

    console.log(page.title());

    // Selectors supported in playwright -> css and xpath.
    // Email field.
    await page.locator("#email").fill("admin")
    await page.locator("#pass").fill("password")
    await page.locator("#loginbutton").click()
})