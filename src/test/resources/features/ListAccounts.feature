@AddAccountFeature
Feature: Adding account 
@AddAccountScenario
Scenario Outline: 1 user should be able to login with valid credentials
Given user is on the codefios login page
When User enters username as "<username>"
When User enters password  as "<password>"
And User clicks on the Sign In button
Then User lands on dashboard page
Then User Validates dashboard button
Then User Validates User Profile button
Then User clicks on ListAccounts
Then User clicks on AddAccount button
Then User enters "<accountName>" in Account Name field
Then user enters "<descripton>" in Description box
Then user enters "<initialBalance>" in IntialBalance field
Then user enters "<acNumber>" in A/c Nmuber field
Then User enters "<contactPerson>" in the box
And user clicks on Save button 

Examples:
|username         |password   |accountName |descripton     |initialBalance|acNumber   |contactPerson |
|demo@codefios.com|abc123     |RK1			   |des				     |20000				  |861875181  |tf				     |
|demo@codefios.com|abc123     |RK		       |bank account   |579600        |510476     |R             |