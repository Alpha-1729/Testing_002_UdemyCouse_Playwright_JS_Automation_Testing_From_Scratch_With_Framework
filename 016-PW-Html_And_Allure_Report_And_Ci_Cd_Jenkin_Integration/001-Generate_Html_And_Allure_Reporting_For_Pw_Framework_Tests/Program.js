// Generate Html And Allure Reporting For Pw Framework Tests

/*
>>>> Allure Playwright
        Reference Link: https://www.npmjs.com/package/allure-playwright
>>>> Install allure in playwright.
        npm i -D @playwright/test allure-playwright
>>>> Generate allure report.
        Allure report will be created based on the output from the line reporting.
        npx playwright test --reporter=line,allure-playwright

        Generate allure report after the test execution.
        --clean -> This option is used to clear all previous report.
        allure generate ./allure-results --clean (This command should be run in command prompt only)

        Open allure report.
        allure open ./allure-report
>>>>
*/