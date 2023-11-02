const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

    // Storing the current browser data into a json file.
    await context.storageState({ path: 'state.json' });

    // Create a duplicate browser context with session details.
    webContext = await browser.newContext({ storageState: 'state.json' });
})

test("Test", async () => {
    const page = await webContext.newPage();

    await page.goto("https://rahulshettyacademy.com/client");

    await page.pause();
})