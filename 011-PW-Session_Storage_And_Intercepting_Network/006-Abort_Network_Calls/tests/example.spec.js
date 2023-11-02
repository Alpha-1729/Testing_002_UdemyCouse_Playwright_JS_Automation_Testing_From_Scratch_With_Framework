const { test, expect } = require('@playwright/test');
const { request } = require('http');

test("Security test request intercept", async ({ page }) => {

    // Block all images in the webpage.
    page.route('**/*.{jpg,png,jpeg}', route => route.abort());
    // Block all css in the webpage.
    page.route('**/*.css', route => route.abort());

    // Listen and print all the request made from the UI.
    page.on('request', request => console.log(request.url()));

    // Listen and print all the response and status code.
    page.on('response', response => console.log(response.url(), response.status()));

    // Login and reach order page.
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.pause();
})