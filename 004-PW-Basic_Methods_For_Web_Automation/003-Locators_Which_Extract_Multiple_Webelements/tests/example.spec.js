const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signInbtn = page.locator("#signInBtn");
    const cardTitle = page.locator(".card-body a");

    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await signInbtn.click();

    // Get the title of the first product.
    console.log(await cardTitle.nth(0).textContent());
    // OR
    console.log(await cardTitle.first().textContent());

})