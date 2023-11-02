// Session Storage And Inject Into New Browser Context

/*
>>>> In order to bypass login always.
        We first login using the API and grab the token.
        Then that token in injected into the session storage.

        But most of the modern application store more fields like token in the session storage.
        It is not practical to identify each fields and inject each into the session storage one by one.

        For that we first login from web and grab all fields in the session storage and save in a json file.
        Then we inject this json file in the successive session.
>>>>
>>>>
>>>>
*/