import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

export default function QualificationTable({ onQualificationsChange }) {
  const [qualifications, setQualifications] = useState([
    { degree: "", institution: "", year: "", grade: "" },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newQualifications = [...qualifications];
    newQualifications[index][name] = value;
    setQualifications(newQualifications);
  };

  const addRow = () => {
    setQualifications([
      ...qualifications,
      { degree: "", institution: "", board: "", year: "", grade: "" },
    ]);
  };

  useEffect(() => {
    if (onQualificationsChange) {
      onQualificationsChange(qualifications);
    }
  }, [qualifications, onQualificationsChange]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course</th>
            <th>Institution</th>
            <th>Board/Univerity</th>
            <th>Year</th>
            <th>Grade/Percentage</th>
          </tr>
        </thead>
        <tbody>
          {qualifications.map((qualification, index) => (
            <tr key={index}>
              <td>
                <Form.Control
                  type="text"
                  name="degree"
                  value={qualification.degree}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="institution"
                  value={qualification.institution}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="board"
                  value={qualification.board}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="year"
                  value={qualification.year}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="grade"
                  value={qualification.grade}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={addRow} variant="primary" style={{ marginTop: "10px" }}>
        Add Qualification
      </Button>
    </div>
  );
}
