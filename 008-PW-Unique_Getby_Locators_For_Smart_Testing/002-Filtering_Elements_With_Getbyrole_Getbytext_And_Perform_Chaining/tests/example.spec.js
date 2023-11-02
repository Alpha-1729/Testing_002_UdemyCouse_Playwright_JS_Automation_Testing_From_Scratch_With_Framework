const { test, expect } = require('@playwright/test');

test("Playwright Special locators", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("password");

    await page.getByRole("button", { name: "Submit" }).click();
    
    expect(await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();
    
    await page.getByRole("link", { name: "Shop" }).click();

    // Adding an item into cart by chaining multiple elements.
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

    await page.pause();

})