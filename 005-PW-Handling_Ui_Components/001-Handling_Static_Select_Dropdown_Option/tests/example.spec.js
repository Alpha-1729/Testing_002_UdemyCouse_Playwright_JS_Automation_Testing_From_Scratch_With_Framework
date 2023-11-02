const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const dropDown = page.locator("select.form-control");
    const radioBtn = page.locator(".radiotextsty");
    const okayPopup = page.locator("#okayBtn");

    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await dropDown.selectOption("consult");

    // Selecting the last dropdown.
    await radioBtn.last().click();

    // Click on the okay on pop up.
    await okayPopup.click();

    // Execution will be stopped here before closing.
    // Also a test recorder(playwright inspector) will be pop up at ths stage to record more test.
    await page.pause();

})