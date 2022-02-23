Feature: Show/Hide an event's details

  Scenario: An event element is collapsed by default.
    Given user started the app
    When nothing is clicked
    Then event’s details are collapsed by default

  Scenario: User can expand an event to see its details
    Given user would like to know more about particular event
    When the user clicks that event
    Then the event details will expand

  Scenario: User can collapse an event to hide its details
    Given user saw the event’s details
    When the user clicks again on the event
    Then the event’s details will collapse
