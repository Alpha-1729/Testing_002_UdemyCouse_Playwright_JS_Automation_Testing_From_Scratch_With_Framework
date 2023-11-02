const { test, expect, request } = require('@playwright/test');

const loginPayload = { userEmail: "admintest1@gmail.com", userPassword: "Admintest@1" };

// Authentication block.
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayload })

    // Checking the status of the api response.
    // Success code start with 200.
    expect((await loginResponse).ok()).toBeTruthy();

    const loginResponseJson = loginResponse.json();

    const token = loginResponseJson.token;
});

test.beforeAll(() => {

});

test("Test", async ({ page }) => {
    await page.goto("https://www.google.com");
})