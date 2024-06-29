$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ListAccounts.feature");
formatter.feature({
  "name": "Adding account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddAccountFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1 user should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccountScenario"
    }
  ]
});
formatter.step({
  "name": "user is on the codefios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password  as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the Sign In button",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User Validates dashboard button",
  "keyword": "Then "
});
formatter.step({
  "name": "User Validates User Profile button",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on ListAccounts",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on AddAccount button",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters \"\u003caccountName\u003e\" in Account Name field",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cdescripton\u003e\" in Description box",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cinitialBalance\u003e\" in IntialBalance field",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cacNumber\u003e\" in A/c Nmuber field",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the box",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountName",
        "descripton",
        "initialBalance",
        "acNumber",
        "contactPerson"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "RK1",
        "des",
        "20000",
        "861875181",
        "tf"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "RK",
        "bank account",
        "579600",
        "510476",
        "R"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1 user should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccountFeature"
    },
    {
      "name": "@AddAccountScenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_the_codefios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.userEntersUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password  as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Sign In button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_the_Sign_In_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_lands_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Validates dashboard button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_Validates_dashboard_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Validates User Profile button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_Validates_User_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on ListAccounts",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_ListAccounts()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.SearchContext.findElement(org.openqa.selenium.By)\" because \"this.searchContext\" is null\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.click(Unknown Source)\r\n\tat pages.AddAccountInListAccountsPage.clickListAccount(AddAccountInListAccountsPage.java:32)\r\n\tat steps.AddAccountStepDefinition.user_clicks_on_ListAccounts(AddAccountStepDefinition.java:23)\r\n\tat ✽.User clicks on ListAccounts(file:///C:/Users/sunil/eclipse-workspace/Selenium/Cucumber/src/test/resources/features/ListAccounts.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on AddAccount button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_AddAccount_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"RK1\" in Account Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_Account_Name_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"des\" in Description box",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_Description_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"20000\" in IntialBalance field",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_IntialBalance_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"861875181\" in A/c Nmuber field",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_A_c_Nmuber_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"tf\" in the box",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_the_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "1 user should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccountFeature"
    },
    {
      "name": "@AddAccountScenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_the_codefios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.userEntersUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password  as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Sign In button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_the_Sign_In_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_lands_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Validates dashboard button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_Validates_dashboard_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Validates User Profile button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_Validates_User_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on ListAccounts",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_ListAccounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on AddAccount button",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_AddAccount_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"RK\" in Account Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_Account_Name_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"bank account\" in Description box",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_Description_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"579600\" in IntialBalance field",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_IntialBalance_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"510476\" in A/c Nmuber field",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_A_c_Nmuber_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"R\" in the box",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_enters_in_the_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
});