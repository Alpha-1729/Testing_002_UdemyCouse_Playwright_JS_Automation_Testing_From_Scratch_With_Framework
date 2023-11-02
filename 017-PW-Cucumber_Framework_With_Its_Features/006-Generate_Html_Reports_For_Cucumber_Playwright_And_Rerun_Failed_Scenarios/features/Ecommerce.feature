Feature: Ecommerce Validations
  @Regression
  @Commerce
  Scenario: Placing the Order
    Given a login to E-commerce application with "admintest1@gmail.com" and "Admintest@1"
    When Add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify order is present in the OrderHistory

  @Validations
  @ErrorValidations
  Scenario Outline: Login Validation
    Given a login to E-commerce2 application with "<username>" and "<password>"
    Then Verify error message is displayed

    Examples:
      | username          | password    |
      | anshika@gmail.com | Iamking@000 |
      | hello@123.com     | Iamhello@12 |