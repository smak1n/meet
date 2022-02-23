import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    });

    test('render text input', () => {
      expect(NumberOfEventsWrapper.find('.events-number')).toHaveLength(1);
    });

    test('change state when text input changes', () => {
      NumberOfEventsWrapper.setState({
        numberOfEvents: '32',
      });
      const eventObject = { target: { value: '20' } };
      NumberOfEventsWrapper.find('.events-number').simulate('change', eventObject);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('20');
    });
});