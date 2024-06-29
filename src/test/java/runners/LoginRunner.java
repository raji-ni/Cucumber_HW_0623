package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true, 
		//features = "src\\test\\resources\\features\\CodeFiosLogin.feature",
				features = "src\\test\\resources\\features",
		glue = "steps",  // this referring package which holds all the step definitions
		tags ="@AddAccountScenario",
		monochrome = true, //if its true pretty report will enable
		dryRun =false, //if its true it will chk the compilation errors
		plugin = {
				"pretty",
				"html:target/reports/cucumber.html",
				"json:target/reports/cucumber.json"
		}
		
		
		
		)
public class LoginRunner {

}
