import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventListWrapper;
  let EventWrapper;

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('user started the app', () => {
      AppWrapper = mount(<App />);
    });

    when('nothing is clicked', () => {
      // no action
    });

    then('event’s details are collapsed by default', () => {
      expect(AppWrapper.find('.details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('user would like to know more about particular event', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      const event = mockData[0];
      EventWrapper = mount(< Event event={event} />);
      expect(EventWrapper.state('showDetails')).toBe(false);
    });

    when('the user clicks that event', () => {
      EventWrapper.find('.details').simulate('click');
    });

    then('the event details will expand', () => {
      expect(EventWrapper.state('showDetails')).toBe(true);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('user saw the event’s details', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      const event = mockData[0];
      EventWrapper = mount(< Event event={event} />);
      EventWrapper.find('.details').simulate('click');
      expect(EventWrapper.state('showDetails')).toBe(true);
    });

    when('the user clicks again on the event', () => {
      EventWrapper.find('.details').simulate('click');
    });

    then('the event’s details will collapse', () => {
      expect(EventWrapper.state('showDetails')).toBe(false);
    });
  });
});