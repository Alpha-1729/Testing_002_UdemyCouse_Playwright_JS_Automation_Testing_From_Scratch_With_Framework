Feature: Error Validations
    @Validations
    @ErrorValidations
    Scenario: Placing the Order
        Given a login to E-commerce2 application with "admintest1@gmail.com" and "Admintest@1"
        Then Verify error message is displayed