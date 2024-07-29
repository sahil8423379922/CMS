import React from "react";
import { Card } from "react-bootstrap";

export default function Dahboard() {
  return (
    <>
      <center style={{ marginTop: "40px" }}>
        <div>
          <Card style={{ width: "18rem", textAlign: "center", margin: "10px" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "40px" }}>00</Card.Title>
              <Card.Text>Total Active Students</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </center>
    </>
  );
}
