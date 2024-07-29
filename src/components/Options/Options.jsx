import React from "react";
import Table from "react-bootstrap/Table";

export default function Options({ handelswitch }) {
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
        <tbody>
          <tr style={{ border: "1px solid black" }}>
            <th
              onClick={() => handelswitch(0)}
              style={{ textAlign: "center", border: "1px solid black" }}
            >
              Dashboard
            </th>
            <th
              onClick={() => handelswitch(1)}
              style={{ textAlign: "center", border: "1px solid black" }}
            >
              New Registration
            </th>
            <th
              onClick={() => handelswitch(2)}
              style={{ textAlign: "center", border: "1px solid black" }}
            >
              Existing Student
            </th>
            <th
              onClick={() => handelswitch(3)}
              style={{ textAlign: "center", border: "1px solid black" }}
            >
              Fees Submission
            </th>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
