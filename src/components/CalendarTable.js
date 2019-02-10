import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { MONTHS } from './Constants';
import Button from "react-bootstrap/Button";
import Calendar from 'react-calendar';


class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 1,
      selectedMonth: 0,
      selectedYear: 2019,
      selectedDate: new Date('January 2, 2019')
    }
    // this.changeMonth = this.changeMonth.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeDate = code => {
    const selectedDate = this.state.selectedDate;

    switch(code) {
      case "<":
        selectedDate.setMonth(this.state.selectedDate.getMonth() - 1);
        break;
      case ">":
        selectedDate.setMonth(this.state.selectedDate.getMonth() + 1);
        break;
      case "<<":
        selectedDate.setFullYear(this.state.selectedDate.getFullYear() - 1);
        break;
      case ">>":
        selectedDate.setFullYear(this.state.selectedDate.getFullYear() + 1);
        break;
      default:
        break;
    }
    this.setState({ selectedDate });
  }
  
  render() {
    const selectedMonth = MONTHS[this.state.selectedDate.getMonth()].name;
    return (
      <div>
        <Button variant="link" onClick={() => this.changeDate("<<")}>
          {"<<"}
        </Button>
        <Button variant="link" onClick={() => this.changeDate("<")}>
          {"<"}
        </Button>
        {selectedMonth} {this.state.selectedDate.getFullYear()}
        <Button variant="link" onClick={() => this.changeDate(">")}>
          {">"}
        </Button>
        <Button variant="link" onClick={() => this.changeDate(">>")}>
          {">>"}
        </Button>
        <div>
          <h3>{this.props.title}</h3>
          <Table bordered variant="dark">
            <thead>
              <tr>
                {this.props.columnNames.map((dayObject, i) => (
                  <th key={i} width={dayObject.width}>
                    {dayObject.day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </Table>
        </div>
      </div>
    );
  }
};

export default CalendarTable;
