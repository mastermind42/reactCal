import React, { Component } from "react";
import CalendarTable from "./CalendarTable";
import { WEEKDAYS } from "./Constants";

class Week extends Component {
  constructor(props) {
    super(props);
    console.log("Week View");
    this.state = {
      weekList: WEEKDAYS
    };
  }

  render() {
    return (
      <CalendarTable title="Week View" columnNames={this.state.weekList}>
        {[...Array(24)].map((_, index) => (
          <tr key={index}>
            <td>
              {index}:00 - {index + 1}:00
            </td>
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
    );
  }
}

export default Week;
