const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter: 'html',
  timeout: 30 * 1000,
  use: {
    browserName: 'webkit',
    headless: true,
    screenshot: 'off',
    trace: 'on-first-retry'
  }
});

