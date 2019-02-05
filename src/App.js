import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Month from "./components/Month";
import Day from "./components/Day";
import Week from "./components/Week";

import dummyData from "./dummyData";
// import { Button, Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = { type: 0 }; // 0 = month, 1 = week, 2 = workweek, 3 = day
    this.changeType = this.changeType.bind(this);
  }

  changeType = event => {
    console.log(`set to ${event.target.id}`);
    this.setState({ type: parseInt(event.target.id) });
    console.log(this.state);
  };

  render() {
    console.log(dummyData);

    return (
      <div className="App">
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="10">
              {this.state.type === 0 && <Month defaultEvents={dummyData} />}
              {this.state.type === 1 && <Week defaultEvents={dummyData} />}
              {this.state.type === 3 && <Day defaultEvents={dummyData} />}
            </Col>
          </Row>
        </Container>
        <button onClick={() => this.setState({ type: 0 })}>Month</button>
        <button id="1" onClick={this.changeType.bind(this)}>
          Week
        </button>
        <button id="2" onClick={this.changeType.bind(this)}>
          Work Week
        </button>
        <button onClick={() => this.setState({ type: 3 })}>Day</button>
        type: {this.state.type}
      </div>
    );
  }
}

export default App;
