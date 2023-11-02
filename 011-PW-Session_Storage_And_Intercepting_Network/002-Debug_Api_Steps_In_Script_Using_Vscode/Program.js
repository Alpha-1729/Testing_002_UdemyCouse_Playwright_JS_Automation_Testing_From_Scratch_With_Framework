// Debug Api Steps In Script Using Vscode

/*
>>>> Debugging of playwright inspector will work only on UI part.
>>>> Debug API codes using VsCode.
        Place the script to execute the test in the package.json file.
            "scripts": {
                "test": "npx playwright test tests/example.spec.js --headed"
            },
            Refer the package.json file of the current folder.
        
        Increase the timeout mentioned in the playwright.config.js file.
            timeout: 100 * 1000
        
        Add a debug point in the script.

        Ctrl + Shift + P
        Select "Debug npm script"
>>>>
>>>>
*/