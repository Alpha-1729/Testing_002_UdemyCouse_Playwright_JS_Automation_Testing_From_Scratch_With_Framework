class LoginPage {
    constructor(page) {
        this.page = page;
        this.userNameLocator = page.locator("#userEmail");
        this.passwordLocator = page.locator("#userPassword");
        this.signInBtnLocator = page.locator("#login");
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(userName, password) {
        await this.userNameLocator.fill(userName);
        await this.passwordLocator.fill(password);
        await this.signInBtnLocator.click();
        await this.page.waitForLoadState('networkidle');
    }

}

module.exports = { LoginPage };