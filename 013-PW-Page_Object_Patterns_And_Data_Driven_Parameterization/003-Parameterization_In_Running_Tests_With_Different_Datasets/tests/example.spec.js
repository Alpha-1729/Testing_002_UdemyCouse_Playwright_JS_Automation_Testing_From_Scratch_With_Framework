const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-object/POManager');

// Convert JSON -> string -> JS object.
const dataSet = JSON.parse(JSON.stringify(require('../utils/test-data/place-order.json')));

for (const data of dataSet) {
    test(`Client App login for ${data.productName}`, async ({ page }) => {

        const poManager = new POManager(page);

        const loginPage = await poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);

        const dashboardPage = await poManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(data.productName);
        await dashboardPage.navigateToCart();

        const cartPage = poManager.getCartPage();
        await cartPage.VerifyProductIsDisplayed(data.productName);
        await cartPage.Checkout();

        const ordersReviewPage = poManager.getOrdersReviewPage();
        await ordersReviewPage.searchCountryAndSelect("ind", "India");
        const orderId = await ordersReviewPage.SubmitAndGetOrderId();
        console.log(orderId);
        await dashboardPage.navigateToOrders();
        const ordersHistoryPage = poManager.getOrdersHistoryPage();
        await ordersHistoryPage.searchOrderAndSelect(orderId);
        expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
        await page.pause();
    });
}
