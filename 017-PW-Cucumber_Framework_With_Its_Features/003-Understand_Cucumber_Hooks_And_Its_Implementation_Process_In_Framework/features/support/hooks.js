const { POManager } = require('../../page-object/POManager');
const playwright = require('@playwright/test');
const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber')

Before(async function () {

    const browser = await playwright.chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep(function () {
    // This hook will executed before all steps in a scenario.
});

// This hook will take a screenshot when step in a scenario is failed.
AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot.png' });
    }
});

After(function () {
    console.log("Closing...");
});
