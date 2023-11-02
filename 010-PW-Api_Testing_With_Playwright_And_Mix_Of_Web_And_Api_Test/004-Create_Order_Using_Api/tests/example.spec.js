const { test, expect, request } = require('@playwright/test');

let token;
let orderId;
const loginPayload = { userEmail: "admintest1@gmail.com", userPassword: "Admintest@1" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6262e990e26b7e1a10e89bfa" }] };

// Authentication block.
test.beforeAll(async () => {

    // Login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayload })

    // Checking the status of the api response.
    // Success code start with 200.
    expect((await loginResponse).ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();

    token = loginResponseJson.token;
    console.log(token);

    // Order API.
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
        data: orderPayload,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })

    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
});

test("Test", async ({ page }) => {

    // Playwright can execute any javascript expression.
    // Insert token into localstorage.
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client");

    // Go to my orders.
    await page.locator("button[routerlink*='myorders']").click();

    // Get the locator of each rows of products.
    const productRows = await page.locator("tbody tr");
    await page.locator("tbody").waitFor();
    const totalOrders = await productRows.count();

    for (let i = 0; i < totalOrders; i++) {
        const rowOrderId = await productRows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId)) {
            await productRows.nth(i).locator("button").first().click();
            break;
        }
    }

    // Verify the orderId in order details page.
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();

    await page.pause()

})