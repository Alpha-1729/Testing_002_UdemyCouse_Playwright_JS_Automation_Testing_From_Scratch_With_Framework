const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-object/POManager');

test("Test", async ({ page }) => {
    const userName = "admintest1@gmail.com";
    const password = "Admintest@1";
    const productName = 'zara coat 3';

    const poManager = new POManager(page);

    const loginPage = await poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(userName, password);

    const dashboardPage = await poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
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
})