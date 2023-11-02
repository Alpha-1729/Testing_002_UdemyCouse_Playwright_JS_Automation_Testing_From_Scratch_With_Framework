const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const dropDown = page.locator("select.form-control");
    const radioBtn = page.locator(".radiotextsty");
    const okayPopup = page.locator("#okayBtn");
    const checkBox = page.locator(".text-info #terms");

    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await dropDown.selectOption("consult");

    // Selecting the last dropdown.
    await radioBtn.last().click();

    // Click on the okay on pop up.
    await okayPopup.click();

    // Checking the status of checked radio button.
    await expect(radioBtn.last()).toBeChecked();
    // OR
    console.log(await radioBtn.last().isChecked());

    // Clicking on the checkbox.
    await checkBox.check();
    // OR
    // await checkBox.click();
    await expect(checkBox).toBeChecked();

    // Uncheck the checkbox.
    await checkBox.uncheck();
    // Assertion for uncheck.
    expect(await checkBox.isChecked()).toBeFalsy();

    // Execution will be stopped here before closing.
    // Also a test recorder(playwright inspector) will be pop up at ths stage to record more test.
    await page.pause();

})