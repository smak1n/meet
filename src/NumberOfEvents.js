import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      return this.setState({
        infoText: 'Select a number between 1 - 32',
        numberOfEvents: '',
      });
    } else {
    this.setState({
      numberOfEvents: value,
      infoText: '',
    });
    this.props.updateEvents(null, event.target.value);
    }
  };

  render() {
    return <div className="numberOfEvents">
      <ErrorAlert text={this.state.infoText} />
      <h3>Number of events</h3>
      <input
        type="number"
        className="events-number"
        value={this.state.numberOfEvents}
        onChange={this.handleInputChanged}
      />
    </div>;
  }
}
export default NumberOfEvents;