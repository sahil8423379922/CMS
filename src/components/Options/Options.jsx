import React from "react";
import Table from "react-bootstrap/Table";

export default function Options() {
  return (
    <>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{
          padding: "0px",
          margin: "0px",
          height: "50px",
          textAlign: "center",
        }}
      >
        <tr style={{ border: "1px solid black" }}>
          <th style={{ textAlign: "center", border: "1px solid black" }}>
            New Registration
          </th>
          <th style={{ textAlign: "center", border: "1px solid black" }}>
            Existing Student
          </th>
          <th style={{ textAlign: "center", border: "1px solid black" }}>
            Fees Submission
          </th>
          <th style={{ textAlign: "center", border: "1px solid black" }}>
            Expense Management
          </th>
        </tr>
      </Table>
    </>
  );
}
