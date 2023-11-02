const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");

    const email = "admintest1@gmail.com";

    const searchProductName = "zara coat 3";
    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const signInbtn = page.locator("#login");
    const products = page.locator(".card-body");
    const cartBtn = page.locator("[routerlink*='cart']")
    const cardTitle = page.locator(".card-body b");
    const checkoutBtn = page.locator("text=Checkout")
    const dropDown = page.locator(".ta-results");

    await userName.fill(email);
    await password.fill("Admintest@1");
    await signInbtn.click();

    // Wait for all cards to load.
    await cardTitle.first().waitFor();

    // Count the total elements with this css.
    const productCount = await products.count();

    // Loop through all the product.
    for (let i = 0; i < productCount; ++i) {
        // Chaining locator.
        // Go to a child element from parents.
        const prodName = await products.nth(i).locator("b").textContent();
        if (prodName === searchProductName) {
            // Add the product to cart.
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

    // Verify whether the product is added or not.
    await cartBtn.click();

    // Wait for cart to load.
    await page.locator("div li").first().waitFor();
    const isProductPresent = await page.locator("h3:has-text('zara coat 3')").isVisible();
    expect(isProductPresent).toBeTruthy();

    // Click on checkout button.
    await checkoutBtn.click();

    // Handling auto suggestive dropdown.
    await page.locator("input[placeholder='Select Country']").type("ind", { delay: 100 });

    await dropDown.waitFor();
    const optionsCount = await dropDown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        const countryName = await dropDown.locator("button").nth(i).textContent();
        if (countryName.trim() === "India") {
            await dropDown.locator("button").nth(i).click();
            break;
        }
    }

    // Validating email id in order page.
    expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);

    // Click on place order button.
    await page.locator(".action__submit").click();

    // Asserting the message on the final page.
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

    // Print the order id.
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

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