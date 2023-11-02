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

    // Get the title of all the products.
    // allTextContents method will not wait for page to load.
    // So array will be empty.
    // But textContent() method will wait for page to load.
    console.log(await cardTitle.first().textContent());
    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles);

})