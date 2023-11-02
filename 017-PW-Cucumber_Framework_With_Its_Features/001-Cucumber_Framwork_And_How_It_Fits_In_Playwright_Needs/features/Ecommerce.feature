Feature: Ecommerce Validations

  Scenario: Placing the Order
    Given a login to Ecommerce application with "admintest1@gmail.com" and "Admintest@1"
    When Add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify order is present in the OrderHistory