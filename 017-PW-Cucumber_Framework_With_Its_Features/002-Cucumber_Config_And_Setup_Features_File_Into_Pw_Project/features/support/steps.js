const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../../page-object/POManager');
const playwright = require('@playwright/test')
const { expect } = require('@playwright/test')

Given('a login to E-commerce application with {string} and {string}', { timeout: 15 * 1000 }, async function (username, password) {


    // Running in headless mode.
    // const browser = await playwright.chromium.launch();

    // Running in head mode.
    const browser = await playwright.chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    this.poManager = new POManager(page);
    const loginPage = await this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});
When('Add {string} to Cart', async function (productName) {
    this.dashboardPage = await this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async function () {
    this.ordersReviewPage = this.poManager.getOrdersReviewPage();
    await this.ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await this.ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify order is present in the OrderHistory', async function () {
    await this.dashboardPage.navigateToOrders();
    this.ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await this.ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await this.ordersHistoryPage.getOrderId())).toBeTruthy();
});