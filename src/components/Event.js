import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types';

class Event extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>{this.props.title}</h1>
          </Row>
          <Row>
            <Col>{this.props.startTime}</Col>
            <Col>to</Col>
            <Col>{this.props.endTime}</Col>
          </Row>
          <Row>
            <p>{this.props.detail}</p>
          </Row>
          <Row>
            <p>{this.props.users}</p>
          </Row>
        </Container>
    </div>
    )
  }
}

Event.propTypes = {
  title: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  detail: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.string)
}

export default Event;