import React from "react";
import Table from "react-bootstrap/Table";

const CalendarTable = props => (
  <div>
    <div>
      <h3>{props.title}</h3>
      <Table bordered variant="dark">
        <thead>
          <tr>
            {props.columnNames.map((dayObject, i) => (
              <th key={i} width={dayObject.width}>
                {dayObject.day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </Table>
    </div>
  </div>
);

export default CalendarTable;
