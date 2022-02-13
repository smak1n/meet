import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    eventsNumber: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  }

  render() {
    return <div className="numberOfEvents">
      <input
        type="number"
        className="events-number"
        value={this.state.eventsNumber}
        onChange={this.handleInputChanged}
      />
    </div>;
  }
}
export default NumberOfEvents;