import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import logo from './images/logo192.png';
import { OfflineAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    networkStatus: ''
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        const filteredEvents = events.slice(0, this.numberOfEvents);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(events)
        });
      }
    });
    if (!navigator.onLine) {
      this.setState({
        networkStatus: 'You are offline'
      })
    } else {
      this.setState({
        networkStatus: ''
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          currentLocation === "all"
            ? events
            : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount,
        });
      });
    }
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="Meet Logo" />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <OfflineAlert text={this.state.networkStatus} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;