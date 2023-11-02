const { test, expect } = require('@playwright/test');

// Handling new child window.
test("Child windows handling", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const documentLink = page.locator("[href*='documents-request']");
    const userName = page.locator("#username");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // Grab the details of new page and capture it in a new variable.
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])

    const text = await newPage.locator(".im-para.red").textContent();

    // Grabing the domain from text.
    const domain = text.split("@")[1].split(" ")[0];

    // Fill the domain name in the first page.
    userName.fill(domain);

    await page.pause();
})