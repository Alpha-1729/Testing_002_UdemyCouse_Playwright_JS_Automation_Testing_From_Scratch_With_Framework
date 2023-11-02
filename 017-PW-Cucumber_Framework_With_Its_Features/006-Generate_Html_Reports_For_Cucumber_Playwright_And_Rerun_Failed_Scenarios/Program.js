// Generate Html Reports For Cucumber Playwright And Rerun Failed Scenarios

/*
>>>> In cucumber you cannot run multiple feature file.
        But you can run multiple scenarios in a feature file in parallel.
>>>> Command to run scenarios in parallel.
        npx cucumber-js features/Ecommerce.feature --parallel 2 --exit
>>>> Generate html report
        npx cucumber-js features/Ecommerce.feature --parallel 2 --exit --format html:cucumber-report.html
>>>> Retry failed test.
        Reference Link: https://github.com/cucumber/cucumber-js/blob/main/docs/retry.md
        npx cucumber-js --tags '@Regression' --parallel 2 --exit --format html:cucumber-report.html --retry 1
*/