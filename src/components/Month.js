import React, { Component } from "react";
import CalendarTable from "./CalendarTable";
import { MONTHDAYS, MONTHS } from "./Constants";
import { Button } from "react-bootstrap";

class Month extends Component {
  constructor(props) {
    super(props);
    console.log("In Month");
    this.state = {
      columnNames: MONTHDAYS,
      // months: MONTHS,
      currentMonthValue: 0,
      currentMonthObject: MONTHS[0]
    };
    this.changeMonth = this.changeMonth.bind(this);
  }

  changeMonth = direction => {
    /*adds or subtracts 1 from currentMonth. Loops if value is over 12 or under 1*/
    const current = this.state.currentMonthValue;
    var newMonth;
    switch (direction) {
      case "<":
        newMonth = (current - 1 >= 0 && current - 1) || 11;
        break;
      case ">":
        newMonth = (current + 1 < 12 && current + 1) || 0;
        break;
      default:
        newMonth = current;
        break;
    }
    this.setState({
      currentMonthValue: newMonth,
      currentMonthObject: MONTHS[newMonth]
    });
  };

  render() {
    return (
      <div>
        <Button variant="link" onClick={() => this.changeMonth("<")}>
          {"<"}
        </Button>
        {this.state.currentMonthObject.name}
        <Button variant="link" onClick={() => this.changeMonth(">")}>
          {">"}
        </Button>
        <CalendarTable title="Month View" columnNames={this.state.columnNames}>
          {[...Array(4)].map((_, i) => (
            <tr key={i}>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          ))}
        </CalendarTable>
      </div>
    );
  }
}

export default Month;
