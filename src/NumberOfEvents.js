import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEvents(null, event.target.value);
  }

  render() {
    return <div className="numberOfEvents">
      <h3>Number of events</h3>
      <input
        type="number"
        className="events-number"
        min='1' max='32'
        value={this.state.numberOfEvents}
        onChange={this.handleInputChanged}
      />
    </div>;
  }
}
export default NumberOfEvents;