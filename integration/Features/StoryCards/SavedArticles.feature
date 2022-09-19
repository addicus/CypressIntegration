Feature: Saved Articles

  As a user, I would like to save articles
  so that I view my favorite articles when logged in

Scenario Outline: Saved Articles: can save article
    Given I am in "<viewport>"
    And I navigate to "/signin/"
    When I sign in with user "addicussrex@yahoo.com" and password "testpa$$!"
    And I navigate to "/pf/homepage/?_website=the-summit"
    And I try to save the article
    And I navigate to "/profile/saved-articles/"
    Then I should see that article in my saved items
     

Examples:
      | viewport  | 
      | 1024,768  |   


Scenario Outline: Saved Articles: can save article
    Given I am in "<viewport>"
    And I navigate to "/signin/"
    When I sign in with user "addicussrex@yahoo.com" and password "testpa$$!"
    And I navigate to "/pf/homepage/?_website=the-summit"
    And I try to save the article
    And I navigate to "/profile/saved-articles/"
    Then I should see that article in my saved items