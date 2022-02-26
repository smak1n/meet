Feature: Specify number of events

  Scenario: When user hasn’t specified a number, "32" is the default number
    Given user hasn’t selected specific number of events to be displayed
    When the app is open
    Then the user should see list of events of default length "32"

  Scenario: User can change the number of events they want to see
    Given user wants to change the number of displayed events
    When the user clicks corresponding button for the change
    Then selects desired amount to be displayed at a time