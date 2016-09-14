package net.luminis.psc;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/", format={"pretty", "html:reports/test-report"})
//@Cucumber.Options(format={"pretty","html:reports/test-report"},tags= "@smokeTest")
public class UICucumberRunner {

}


