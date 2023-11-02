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

// Tagged hooks.
BeforeStep({ tags: "@Regression and @Ecommerce" }, function () {
    // This hook will be executed before scenarios tagged with @Regression and @Ecommerce.
    console.log("Regression is running...")
});
// BeforeStep({ tags: "@Regression or @Ecommerce" }, function () {
//     console.log("Regression is running...")
// });
// BeforeStep({ tags: "@Regression" }, function () {
//     console.log("Regression is running...")
// });

// This hook will take a screenshot when step in a scenario is failed.
AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot.png' });
    }
});

After(function () {
    console.log("Closing...");
});
