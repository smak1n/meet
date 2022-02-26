import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;

  test('When user hasn’t specified a number, "32" is the default number', ({ given, when, then }) => {
    given('user hasn’t selected specific number of events to be displayed', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = mount(<NumberOfEvents />);
      expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
    });

    when('the app is open', () => {
      // no action
    });

    then('the user should see list of events of default length "32"', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
});

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('user wants to change the number of displayed events', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });

    when('the user clicks corresponding button for the change', () => {
      const input = { target: { value: 12 } };
      AppWrapper.find('.events-number').simulate('change', input);
    });

    then('selects desired amount to be displayed at a time', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(12);
    });
  });
});