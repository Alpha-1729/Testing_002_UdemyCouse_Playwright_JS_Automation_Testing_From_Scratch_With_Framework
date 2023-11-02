const { test } = require('@playwright/test');

exports.customTest = test.extend(
    {
        // Custom fixture.
        testDataForOrder: {
            username: "admintest1@gmail.com",
            password: "Admintest@1",
            productName: "zara coat 3"
        }
    }
)