@NegativeLoginFeature @Regression
Feature: Codefios negative  login functionality validation

#Background: (as we r using Scenario Outline we can remove this Background&add that step to ScenarioOutline)
#Given user is on the codefios login page

@NegativeScenario1 @Smoke
Scenario Outline: 1 user should not be able to login with invalid credentials
Given user is on the codefios login page
When User enters username as "<username>"
When User enters password  as "<password>"
When User clicks on the Sign In button
Then User lands on dashboard page

Examples:
|username          |password|
|demo@codefios.com |abc124  |
|demo2@codefios.com|abc123  |
|demo2@codefios.com|abc124  |
|									 |				|


