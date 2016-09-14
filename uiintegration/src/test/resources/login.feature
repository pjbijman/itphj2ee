@selenium
Feature: Login Feature File

Scenario: Login scenario test for Gmail

Given navigate to gmail page
When user logged in using username as "cucumber.rules" and password as "tiavspw42!"
Then home page should be displayed