const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    // await page.goto("https://www.rediff.com");
    // expect(await page.screenshot()).toMatchSnapshot('rediff.png');

    // await page.goto("https://www.google.com");
    // expect(await page.screenshot()).toMatchSnapshot('google.png');

    await page.goto("https://www.flightaware.com");
    expect(await page.screenshot()).toMatchSnapshot('flightaware.png');
})