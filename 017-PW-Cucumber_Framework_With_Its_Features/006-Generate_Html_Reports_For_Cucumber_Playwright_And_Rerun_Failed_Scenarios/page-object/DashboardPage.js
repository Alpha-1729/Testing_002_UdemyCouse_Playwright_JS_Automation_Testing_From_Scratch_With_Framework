class DashboardPage {

    constructor(page) {
        this.page = page;
        this.productsLocator = page.locator(".card-body");
        this.productsTextLocator = page.locator(".card-body b");
        this.cartLocator = page.locator("[routerlink*='cart']");
        this.orderLocator = page.locator("button[routerlink*='myorders']");
    }

    async searchProductAddCart(productName) {
        const titles = await this.productsTextLocator.allTextContents();
        console.log(titles);

        const productCount = await this.productsLocator.count();
        console.log(productCount);

        // Loop through all the product.
        for (let i = 0; i < productCount; i++) {
            const prodName = await this.productsLocator.nth(i).locator("b").textContent();

            if (prodName === productName) {
                // Add the product to cart.
                await this.productsLocator.nth(i).locator("text=Add To Cart").click();
                break;
            }
        }
    }

    async navigateToCart() {
        await this.cartLocator.click();
        this.page.waitForLoadState('networkidle');
    }

    async navigateToOrders() {
        await this.orderLocator.click();
        this.page.waitForLoadState('networkidle');
    }
}

module.exports = { DashboardPage };