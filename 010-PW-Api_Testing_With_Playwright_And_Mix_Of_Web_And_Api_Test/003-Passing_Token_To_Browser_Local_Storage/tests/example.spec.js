const { test, expect, request } = require('@playwright/test');

let token;
const loginPayload = { userEmail: "admintest1@gmail.com", userPassword: "Admintest@1" };

// Authentication block.
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayload })

    // Checking the status of the api response.
    // Success code start with 200.
    expect((await loginResponse).ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();

    token = loginResponseJson.token;
    console.log(token);
});

test.beforeEach(() => {

});

test("Test", async ({ page }) => {

    // Playwright can execute any javascript expression.
    // Insert token into localstorage.
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client");

    const cardTitle = page.locator(".card-body b");

    // Get the title of all the products.
    await page.waitForLoadState('networkidle');

    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles);

    await page.pause();

})