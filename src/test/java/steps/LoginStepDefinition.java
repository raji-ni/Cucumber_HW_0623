package steps;

import org.openqa.selenium.support.PageFactory;



//import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.Database;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginpage;
	Database database;
	 
	@Before
	public void beforeRun() {
		initDriver();
		loginpage = PageFactory.initElements(driver,LoginPage.class);
		database = new Database();
	}
	@Given ("user is on the codefios login page")
	public void user_is_on_the_codefios_login_page() {
		driver.get("https://codefios.com/ebilling/");
	}
	@When ("User enters username as {string}")
	public void userEntersUsernameAs(String username) {
		
		loginpage.enterUserName(username);
		
	}
	@When("User enters password  as {string}")
	public void user_enters_password_as(String password ) {
		loginpage.enterPassword(password);
	     
	}
	@When("User enters {string} from database")
	public void user_enters_from_database(String loginData) {
	  if(loginData.equalsIgnoreCase("username")) {
		 loginpage.enterUserName(database.getDataFromDb("user_name")); 
		 System.out.println("username from database is "+database.getDataFromDb("user_name"));
	  }
	  else if(loginData.equalsIgnoreCase("password")){
		  loginpage.enterPassword("user_password");
	  }
	  else System.out.println("invalid credentials");
	}
 /*	switch(loginData) {
	case "username":
		loginpage.enterUserName(getDataFromDb);
		break;
	case "password":
		loginpage.enterPassword("password");
		break;
	}
	default:
		System.out.println("invalid credentials"); */
	@When("User clicks on the Sign In button")
	public void user_clicks_on_the_Sign_In_button() {
		loginpage.clickSignInButton();
	   
	}

	@Then("User lands on dashboard page")
	public void user_lands_on_dashboard_page() {
		takeScreenshot(driver);
		String expectedTitle = "Codefios";
		String actualTitle = loginpage.getPageTitle();
		Assert.assertEquals(expectedTitle,actualTitle);
	}
	
	//@After
	/* public  void tearDown() {
	    	driver.close();
	    	driver.quit();
	    }*/
	




}
