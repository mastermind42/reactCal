import React, { Component } from 'react';
import Event from './Event';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Button, Container, Row, Col } from 'react-bootstrap';


class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  render() {
    // this.setState({ events: this.props.events })
    // console.log('day')
    // console.log(this.state);
    // console.log(this.props.defaultEvents);
    const events = this.props.defaultEvents;
    console.log(events);
    return(
      <Container>
        <Row>
          { events.map(event => (
          <Col>
            <Event {...event}/>
          </Col>)
          )}
        </Row>
      </Container>
    )
  }

}

export default Day;

//Display the day looped or create an event inside it.