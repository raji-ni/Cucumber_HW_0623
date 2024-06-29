package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import pages.AddAccountInListAccountsPage;
import pages.TestBase;

public class AddAccountStepDefinition extends TestBase {
	AddAccountInListAccountsPage addaccountinlistaccountspage; 
	@Before
	public void beforeRun() {
		//initDriver();
		addaccountinlistaccountspage= PageFactory.initElements(driver,AddAccountInListAccountsPage.class);
	}


@Then("User clicks on ListAccounts")
public void user_clicks_on_ListAccounts() {
	addaccountinlistaccountspage.clickListAccount();
    }

@Then("User clicks on AddAccount button")
public void user_clicks_on_AddAccount_button() {
	addaccountinlistaccountspage.clickAddAccountButton();
}

@Then("User enters {string} in Account Name field")
public void user_enters_in_Account_Name_field(String accountName) {
	addaccountinlistaccountspage.enterAccountName(accountName);
}

@Then("user enters {string} in Description box")
public void user_enters_in_Description_box(String descripton) {
	addaccountinlistaccountspage.enterDescription(descripton);
}

@Then("user enters {string} in IntialBalance field")
public void user_enters_in_IntialBalance_field(String initialBalance) {
	addaccountinlistaccountspage.enterIntialBalance(initialBalance);
}

@Then("user enters {string} in A\\/c Nmuber field")
public void user_enters_in_A_c_Nmuber_field(String acNumber) {
	addaccountinlistaccountspage.enterAccountNumber(acNumber);
}

@Then("User enters {string} in the box")
public void user_enters_in_the_box(String contactPerson) {
	addaccountinlistaccountspage.enterContactPerson(contactPerson);
}
@Then("user clicks on Save button")
public void user_clicks_on_Save_button() {
	takeScreenshot(driver);
	addaccountinlistaccountspage.clickSaveButton();
	}
//@After
public void tearDown() {
	driver.close();
	driver.quit();
}


}
