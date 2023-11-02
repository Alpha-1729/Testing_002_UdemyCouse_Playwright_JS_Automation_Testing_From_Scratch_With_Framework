const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter: 'html',
  timeout: 30 * 1000,
  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'off',
        ...devices['iPhone 11']
      },
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        ignoreHttpsErrors: true,
        permissions: ['geolocation'],
        video: 'retain-on-failure',
        viewport: { width: 720, height: 720 }
      },
    }
  ],

});