import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class Month extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurdsay', 'Friday', 'Sunday']
    }
  }

  render() {
    console.log(this.props.defaultEvents)
    return(
      <Table>
        <thead>
          {this.state.dayList.map(day => <th>{day}</th>)}
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </Table>
    )
  }

}

export default Month;