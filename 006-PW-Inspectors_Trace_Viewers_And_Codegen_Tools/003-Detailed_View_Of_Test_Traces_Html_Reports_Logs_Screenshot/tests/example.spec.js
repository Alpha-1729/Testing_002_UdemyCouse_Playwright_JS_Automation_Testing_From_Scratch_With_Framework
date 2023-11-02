const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");

    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const signInbtn = page.locator("#login");
    const cardTitle = page.locator(".card-body b");

    await userName.fill("admintest1@gmail.com");
    await password.fill("Admintest@1");
    await signInbtn.click();

    await page.waitForLoadState('networkidle');  // Wait till all api calls are made.
    
    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles);
})