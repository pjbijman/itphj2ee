package net.luminis.psc;

import java.util.concurrent.TimeUnit;

import cucumber.api.java.After;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UIStepDefinitions {

	WebDriver dr;

	@Given("^navigate to gmail page$")
	public void navigate() {
		//WebDriver driver = new RemoteWebDriver("http://localhost:9515", DesiredCapabilities.chrome());
		//driver.get("http://www.google.com");

		System.setProperty("webdriver.chrome.driver", "/Users/hansriezebos/technology/hazel/chromedriver");
		dr = new ChromeDriver();

		dr.get("http://www.gmail.com");

	}


	@When("^user logged in using username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_logged_in_using_username_as_and_password_as(String username, String password) throws Throwable {

		dr.findElement(By.xpath("//*[@id='Email']")).sendKeys(username);

		dr.findElement(By.xpath("//*[@id='next']")).click();

		dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		dr.findElement(By.xpath("//*[@id='Passwd']")).sendKeys(password);

		dr.findElement(By.xpath("//*[@id='signIn']")).click();

		dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}

	@Then("^home page should be displayed$")
	public void verifySuccessful() {

		String expectedText = "Gmail";

		String actualText = dr.findElement(By.xpath("//*[@id='gbq1']/div/a/span")).getText();

		Assert.assertTrue("Login not successful", expectedText.equals(actualText));

	}

	@After("@selenium")
	public void afterScenario() {
		dr.close();
	}

}
