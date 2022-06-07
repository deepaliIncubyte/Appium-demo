Feature: Login validations

  Background:
    Given Member is on the login screen

  Scenario Outline: Member successfully logs into app
    When Member tries to log in with valid credentials; email: '<Email>' and password: '<Password>'
    Then Member is asked wether he or she wants to enable biometrics 

    Examples:
      | Email       | Password  |
      | Tzimm+child@springhealth.com | foobarbazz |




