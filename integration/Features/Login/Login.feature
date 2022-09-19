Feature: Login

  As a user, I would like to authenticate
  So that the site knows who I am

Scenario Outline: Invalid login: Client side validation
    Given I am in "<viewport>"
    And I am on the signin page
    #When I click accept on the one trust banner
    When I sign in with user "<user>" and password "<pass>"
    Then The form should contain error "<error>"
    
  
Examples:
      | viewport  | user                  | pass | error                                                                  |
      | 1024,768  | test                  | test | Invalid email address                                                  |
      #| 1024,768  | qa@mipo.news          |      | Please enter a password                                                |

Scenario Outline: Invalid login: server validation
    Given I am in "<viewport>"
    And I am on the signin page
    #When I click accept on the one trust banner
     
    When I sign in with user "<user>" and password "<pass>"
    Then The toaster notification should contain error "<error>"
     

Examples:
      | viewport  | user                  | pass    | error                                                                  |
      | 1024,768  |                       |         | Unrecognized password. Try again or click Forgot password to reset it. |
      | 1024,768  |                       |         | Sorry, unrecognized email or password.                                 |

Scenario Outline: Login
    Given I am in "<viewport>"
    And I am on the signin page
    #When I sign in with user "qa@mipo.news" and password "aihx^656dasf7^^9"
    When I sign in with a Grid user
    Then I should be redirected to the home page
    And I should be authenticated
  
  Examples:
      |viewport   |  
      | 1024,768  |
      | iphone-xr |
      | 1024,768  |
      | iphone-xr |