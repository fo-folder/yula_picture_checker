@finddescriptionfromsearch
Feature: Find description from search

 Scenario: A picture in "files" directory required
    Given Navigate to Yandex
    When Go on Pictures page
    And Click on search by picture
    And Enter picture for searching
    Then Check picture description below.