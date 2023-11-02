const { test, expect } = require('@playwright/test');

test("Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");

    const searchProductName = "zara coat 3";
    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const signInbtn = page.locator("#login");
    const products = page.locator(".card-body");
    const cardTitle = page.locator(".card-body b");
    const cartBtn = page.locator("[routerlink*='cart']")

    await userName.fill("admintest1@gmail.com");
    await password.fill("Admintest@1");
    await signInbtn.click();

    // Wait for all cards to load.
    await cardTitle.first().waitFor();

    // Count the total elements with this css.
    const productCount = await products.count();

    // Loop through all the product.
    for (let i = 0; i < productCount; i++) {
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

    await page.pause()
})