@DashboardFeature @Regression
Feature: Codefios Dashboard  functionality validation

@DashboardScenario1 @Smoke
Scenario: user should be able to login with valid credentials
Given user is on the codefios login page
When User enters username as "demo@codefios.com"
When User enters password  as "abc123"
When User clicks on the Sign In button
Then User lands on dashboard page
Then User Validates dashboard button
Then User Validates User Profile button

