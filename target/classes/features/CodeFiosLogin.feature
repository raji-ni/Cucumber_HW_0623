@LoginFeature @Regression
Feature: Codefios login functionality validation

@LoginScenario1
Scenario: user should be able to login with valid credentials
Given user is on the codefios login page
When User enters password  as "abc123"
When User enters username as "demo@codefios.com"
When User clicks on the Sign In button
Then User lands on dashboard page

@LoginScenario2 @Smoke
Scenario: user should be able to login with valid credentials
Given user is on the codefios login page
When User enters username as "demo@codefios.com"
When User enters password  as "abc123"
When User clicks on the Sign In button
Then User lands on dashboard page
