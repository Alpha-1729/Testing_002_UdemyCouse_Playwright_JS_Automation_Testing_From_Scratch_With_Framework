// Various Options In Use Property And Setting Up Project Configurations

/*
>>>> Take screenshot on test failure config.
        screenshot: 'only-on-failure'
>>>> We can create multiple configuration file for the project, and select the config while running the test.
        By default, playwright choose playwright.config.js to run the test.
        We can choose another config the following syntax.
            npx playwright test --config playwright.config.dev.js
>>>> We can parameterize different browser in a single config file.
        If we didn't choose the project, playwright will run the test in all project settings.
        Command to choose the which project from the config file.
            npx playwright test --config playwright.config.js --project=safari
>>>>
*/