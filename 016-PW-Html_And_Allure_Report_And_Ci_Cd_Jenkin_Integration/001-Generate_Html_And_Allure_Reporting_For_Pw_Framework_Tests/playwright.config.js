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
      },
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
      },
    }
  ],

});