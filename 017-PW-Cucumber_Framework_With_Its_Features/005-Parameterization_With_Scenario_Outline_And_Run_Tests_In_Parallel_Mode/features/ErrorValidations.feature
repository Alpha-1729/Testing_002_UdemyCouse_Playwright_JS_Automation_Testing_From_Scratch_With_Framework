Feature: Error Validations
    @Validations
    @ErrorValidations
    Scenario Outline: Placing the Order
        Given a login to E-commerce2 application with "<username>" and "<password>"
        Then Verify error message is displayed

        Examples:
            | username          | password    |
            | anshika@gmail.com | Iamking@000 |
            | hello@123.com     | Iamhello@12 |