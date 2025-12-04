const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // eventos futuros
    },
  },
});
