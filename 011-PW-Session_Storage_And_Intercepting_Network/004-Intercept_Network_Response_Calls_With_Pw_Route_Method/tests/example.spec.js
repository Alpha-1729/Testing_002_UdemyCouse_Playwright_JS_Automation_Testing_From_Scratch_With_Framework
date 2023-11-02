const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('./utils/ApiUtils');

const loginPayload = { userEmail: "admintest1@gmail.com", userPassword: "Admintest@1" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6262e990e26b7e1a10e89bfa" }] };
const fakePayloadOrder = { data: [], message: "No Orders" };

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
    // Use wildcard * to replace the userId to all userId.
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        route => {
            // Intercepting the response.
            const response = page.request.fetch(route.request());
            let body = JSON.stringify(fakePayloadOrder);

            // Giving reponse to browser.
            route.fulfill({
                response,
                body
            });
        }
    );

    await page.locator("button[routerlink*='myorders']").click();

    // Wait for api response to come.
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");

    console.log(await page.locator(".mt-4").textContent());

    await page.pause()

})