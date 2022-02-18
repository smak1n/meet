import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false
  }

  handleClick = (e) => {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const { event } = this.props
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <p className="organizer">{event.organizer.email}</p>
        <p className="time">{event.start.dateTime} - {event.end.dateTime}</p>
        <p className="location">{event.location}</p>
        {
          showDetails && <p className="description">{event.description}</p>
        }
        <button className="details" onClick={this.handleClick}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      </div>
    )
  }
}

export default Event;