Feature: WCAG 2.1 AA Compliance

  As a user, I would like the site to be AA compliant
  so that I may navigate it like any other user

  Scenario Outline: WCAG 2.1 AA Has no errors on page
    Given I am in "<viewport>"
    And I navigate to "<link>"
    When I check for AA 2.1 compliance
    Then I should see not see compliance errors

    Examples:
      | link                                              | viewport  |
      | http://localhost/pf/homepage/?_website=the-summit | 1024,768  |
      | http://localhost/pf/homepage/?_website=the-summit | iphone-xr |
      | http://localhost/signin/                          | 1024,768  |
      | http://localhost/signin/                          | iphone-xr |