const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9ynswi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
