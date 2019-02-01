import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Month from "./components/Month"
import Day from "./components/Day"
// import { Button, Container, Row, Col } from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = { type: 0 }; // 0 = month, 1 = week, 2 = workweek, 3 = day
    this.changeType = this.changeType.bind(this);
  }

  changeType = (event) => {
    console.log(`set to ${event.target.id}`);
    this.setState({type: parseInt(event.target.id)});
    console.log(this.state);
  }

  render() {
    var defaultEvents = [{
      startTime: 800,
      endTime: 900,
      title: "morning wakeup",
      detail: "Morning wakeup details",
      users: ['User 1', 'User 2', 'User 3']
    },
    {
      startTime: 900,
      endTime: 1000,
      title: "standup",
      detail: "standup details",
      users: ['User 1', 'User 2', 'User 3']
    },
    {
      startTime: 1400,
      endTime: 1500,
      title: "event 3",
      detail: "event 3 details",
      users: ['User 1', 'User 2', 'User 3']
    },
    {
      startTime: 1600,
      endTime: 1800,
      title: "event 4",
      detail: "event 4 details",
      users: ['User 1']
    },
    {
      startTime: 2000,
      endTime: 2200,
      title: "end",
      detail: "end details",
      users: ['User 2', 'User 3']
    }];

    return (
      <div className="App">
        <body>
          <button onClick={() => this.setState({type: 0})}>Month</button>
          <button id="1" onClick={this.changeType.bind(this)}>Week</button>
          <button id="2" onClick={this.changeType.bind(this)}>Work Week</button>
          <button onClick={() => this.setState({type: 3})}>Day</button>
          {this.state.type}
          {/* <Board type={i} /> */}
          {this.state.type === 0 && <Month value='testasdfs' defaultEvents={defaultEvents} />}
          {this.state.type === 3 && <Day defaultEvents={defaultEvents} />}
        </body>
      </div>
    );
  }
}

export default App;
