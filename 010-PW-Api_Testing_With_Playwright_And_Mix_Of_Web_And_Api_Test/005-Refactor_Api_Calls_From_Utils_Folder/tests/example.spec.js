const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('./utils/ApiUtils');

const loginPayload = { userEmail: "admintest1@gmail.com", userPassword: "Admintest@1" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6262e990e26b7e1a10e89bfa" }] };

let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});

test("Test", async ({ page }) => {

    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client");

    // Go to my orders.
    await page.locator("button[routerlink*='myorders']").click();

    // Get the locator of each rows of products.
    const productRows = await page.locator("tbody tr");
    await page.locator("tbody").waitFor();
    const totalOrders = await productRows.count();

    for (let i = 0; i < totalOrders; i++) {
        const rowOrderId = await productRows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)) {
            await productRows.nth(i).locator("button").first().click();
            break;
        }
    }

    // Verify the orderId in order details page.
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

    await page.pause()

})