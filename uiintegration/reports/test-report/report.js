$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "id": "login-feature-file",
  "tags": [
    {
      "name": "@selenium",
      "line": 1
    }
  ],
  "description": "",
  "name": "Login Feature File",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "login-feature-file;login-scenario-test-for-gmail",
  "description": "",
  "name": "Login scenario test for Gmail",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "navigate to gmail page",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "user logged in using username as \"cucumber.rules\" and password as \"tiavspw42!\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "home page should be displayed",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "UIStepDefinitions.navigate()"
});
formatter.result({
  "duration": 2294081000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber.rules",
      "offset": 34
    },
    {
      "val": "tiavspw42!",
      "offset": 67
    }
  ],
  "location": "UIStepDefinitions.user_logged_in_using_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 1004820000,
  "status": "passed"
});
formatter.match({
  "location": "UIStepDefinitions.verifySuccessful()"
});
formatter.result({
  "duration": 5166847000,
  "status": "failed",
  "error_message": "java.lang.AssertionError: Login not successful\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat net.luminis.psc.UIStepDefinitions.verifySuccessful(UIStepDefinitions.java:58)\n\tat ✽.Then home page should be displayed(login.feature:8)\n"
});
formatter.after({
  "duration": 173644000,
  "status": "passed"
});
formatter.uri("sample.feature");
formatter.feature({
  "id": "to-test-my-cucumber-test-is-running",
  "tags": [
    {
      "name": "@smokeTest",
      "line": 1
    }
  ],
  "description": "I want to run a sample feature file.",
  "name": "To test my cucumber test is running",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "to-test-my-cucumber-test-is-running;cucumber-setup",
  "description": "",
  "name": "cucumber setup",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "sample feature file is ready",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I run the feature file",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "run should be successful",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "StepDefinition.givenStatment()"
});
formatter.result({
  "duration": 184000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.whenStatement()"
});
formatter.result({
  "duration": 58000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.thenStatment()"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
});