 @DbLoginFeature @Regression
Feature: Codefios login functionality validation


@DbLoginScenario1 
Scenario: user should be able to login with valid credentials from MySQL database
Given user is on the codefios login page
When User enters "username" from database
When User enters "password" from database
When User clicks on the Sign In button
Then User lands on dashboard page
