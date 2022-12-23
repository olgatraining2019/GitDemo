// @ts-check
const { devices } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 50 * 1000, // global timeout (for overall test)
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20000 // wait for each assertion

  },

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    browserName: 'chromium',
    //browserName: 'firefox',
    //browserName: 'webkit', //safari engine
     headless: false

  },

  
};

module.exports = config;
