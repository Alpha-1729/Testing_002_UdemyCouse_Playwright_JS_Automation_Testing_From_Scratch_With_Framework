// Locators In Playwright And Type Into Elements

/*
>>>> Default timeout for a single test: 30 second
>>>> Default timeout for a assert statement: 5 second
>>>> Please refer the config file.
>>>> Install SelectorsHub extension to verify the uniqueness of the css selector.
        Chrome: https://chrome.google.com/webstore/detail/selectorshub/ndgimibanhlabgdgjcpbbndiehljcpfh
        Firefox: https://addons.mozilla.org/en-US/firefox/addon/selectorshub/
>>>> Creating selectors in playwright.
        If Id attribute is present:
            css -> tagname#id or #id
                Eg: input.input#identifierId
        If class attribute is present:
            css -> tagname.class or .class
                Eg: input.email
        css based on any attribute.
            css -> [attribute="value"]
                Eg: [id="identifierId"]
        For css with traversing from parent to child.
            css -> parenttagname childtagname
                Eg: .card-body a
*/