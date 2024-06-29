package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddAccountInListAccountsPage {
WebDriver driver;
public AddAccountInListAccountsPage(WebDriver driver) {
	this.driver = driver;
}

@FindBy(how = How.XPATH,using = "/html/body/div[1]/aside[1]/div/nav/ul[2]/li[3]/a")
WebElement LIST_ACCOUNT_ELEMENT;
@FindBy(how =How.XPATH,using="/html/body/div[1]/section/div/div[2]/div/div[1]/div/div[2]/header/button")
WebElement ADD_ACCOUNT_BUTTON;
@FindBy(how = How.XPATH, using="//*[@id=\"account_name\"]")
WebElement ACCOUNT_NAME_ELEMENT;
@FindBy(how = How.XPATH, using="//*[@id=\"description\"]")
WebElement DESCRIPTION_ELEMENT;
@FindBy(how = How.XPATH, using="//*[@id=\"balance\"]")
WebElement INTIAL_BALANCE_ELEMENT;
@FindBy(how = How.XPATH, using="//*[@id='account_number']")
WebElement A_C_NUMBER_ELEMENT;
@FindBy(how = How.XPATH, using="//*[@id=\"contact_person\"]")
WebElement CONTACT_PERSON_ELEMENT;
@FindBy(how = How.XPATH, using="//*[@id=\"accountSave\"]")
WebElement SAVE_BUTTON_ELEMENT;

public void clickListAccount() { 
	LIST_ACCOUNT_ELEMENT.click();
	try {
		Thread.sleep(5000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}

}
public void clickAddAccountButton() {
	ADD_ACCOUNT_BUTTON.click();
	try {
		Thread.sleep(5000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	
}
public void enterAccountName(String accountName) {
	ACCOUNT_NAME_ELEMENT.sendKeys(accountName);
}
public void enterDescription(String descripton) {
	DESCRIPTION_ELEMENT.sendKeys(descripton);
}
public void enterIntialBalance(String initialBalance) {
	INTIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
}
public void enterAccountNumber(String acNumber) {
	A_C_NUMBER_ELEMENT.sendKeys(acNumber);
}
public void enterContactPerson(String contactPerson) {
	CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
}
public void clickSaveButton() {
	SAVE_BUTTON_ELEMENT.click();
}
}
