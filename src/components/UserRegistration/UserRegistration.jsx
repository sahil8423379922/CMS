import React, { useState } from "react";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import QualificationTable from "./QuallificationDetails";
import style from "./css/UserRegistration.module.css";

export default function UserRegistration() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [occupation, setOccupation] = useState("");
  const [fathercontact, setFathercontact] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [rfees, setRegistrationfees] = useState("");
  const [fees, setFees] = useState("");
  const [qua, setQua] = useState("");

  // State for alert
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleQualificationsData = (qualifications) => {
    setQua(qualifications);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let message = "";

    // Validation rules
    if (name.trim() === "") {
      message += "Please enter the First Name.\n";
    } else if (lname.trim() === "") {
      message += "Please enter the Last Name.\n";
    } else if (dob.trim() === "") {
      message += "Please enter the Date of Birth.\n";
    } else if (contact.trim() === "") {
      message += "Please enter the Contact Number.\n";
    } else if (category.trim() === "") {
      message += "Please enter the Category.\n";
    } else if (gender.trim() === "") {
      message += "Please enter the Gender.\n";
    } else if (bloodgroup.trim() === "") {
      message += "Please enter the Blood Group.\n";
    } else if (father.trim() === "") {
      message += "Please enter the Father Name.\n";
    } else if (mother.trim() === "") {
      message += "Please enter the Mother Name.\n";
    } else if (occupation.trim() === "") {
      message += "Please enter the Occupation.\n";
    } else if (duration.trim() === "") {
      message += "Please enter the Duration.\n";
    } else if (rfees.trim() === "") {
      message += "Please enter the Registration Fees.\n";
    } else if (fees.trim() === "") {
      message += "Please enter the Monthly Fees.\n";
    } else {
      setShowAlert(false);
      console.log("Name =", name);
      console.log("lname =", lname);
      console.log("dob =", dob);
      console.log("contact =", contact);
      console.log("category =", category);
      console.log("gender =", gender);
      console.log("blood group =", bloodgroup);
      console.log("father =", father);
      console.log("mother =", mother);
      console.log("occupation =", occupation);
      console.log("fathercontact =", fathercontact);
      console.log("course =", course);
      console.log("duration =", duration);
      console.log("rfees =", rfees);
      console.log("fees =", fees);
      console.log("Qualification =", qua);
    }

    // Other validation rules can be added here

    if (message) {
      setAlertMessage(message.trim());
      setShowAlert(true);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#FFFDD0" }} className="pt-5 pb-5">
        <div className="container p-5 " style={{ backgroundColor: "white" }}>
          <Form>
            <h3>Basic Details</h3>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    onChange={(data) => setName(data.target.value)}
                    type="text"
                    placeholder="Enter First Name"
                    value={name}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    onChange={(data) => setLname(data.target.value)}
                    type="text"
                    placeholder="Enter Last Name"
                    value={lname}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control
                    onChange={(data) => setDob(data.target.value)}
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicContact">
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control
                    onChange={(data) => setContact(data.target.value)}
                    type="text"
                    placeholder="Number"
                    value={contact}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-4 d-flex flex-column">
                <Form.Label>Select Category</Form.Label>
                <Form.Select
                  onChange={(data) => setCategory(data.target.value)}
                  value={category}
                >
                  <option>Default</option>
                  <option>General</option>
                  <option>OBC</option>
                  <option>SC/ST</option>
                </Form.Select>
              </div>

              <div className="col-md-4 d-flex flex-column">
                <Form.Label>Select Gender</Form.Label>
                <Form.Select
                  onChange={(data) => setGender(data.target.value)}
                  value={gender}
                >
                  <option>Default</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Not Prefer to Say</option>
                </Form.Select>
              </div>

              <div className="col-md-4 d-flex flex-column">
                <Form.Label>Select Blood Group</Form.Label>
                <Form.Select
                  onChange={(data) => setBloodgroup(data.target.value)}
                  value={bloodgroup}
                >
                  <option>Default</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>AB+</option>
                  <option>O+</option>
                </Form.Select>
              </div>
            </div>

            <h3 style={{ marginTop: "30px" }}>Qualification Details</h3>

            <div>
              <QualificationTable
                onQualificationsChange={handleQualificationsData}
              />
            </div>

            <div className="mt-4">
              <h3>Personal Details</h3>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                      onChange={(data) => setFather(data.target.value)}
                      type="text"
                      placeholder="Enter Father Name"
                      value={father}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mother Name</Form.Label>
                    <Form.Control
                      onChange={(data) => setMother(data.target.value)}
                      type="text"
                      placeholder="Enter Mother Name"
                      value={mother}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control
                      onChange={(data) => setOccupation(data.target.value)}
                      type="text"
                      placeholder="Enter Occupation"
                      value={occupation}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control
                      onChange={(data) => setFathercontact(data.target.value)}
                      type="text"
                      placeholder="Number"
                      value={fathercontact}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3>Course Details</h3>
              <div className="row align-items-center">
                <div className="col-md-6 d-flex flex-column">
                  <Form.Label>Select Course</Form.Label>
                  <Form.Select
                    onChange={(data) => setCourse(data.target.value)}
                    value={course}
                  >
                    <option>Default</option>
                    <option>Diploma in Computer Application (DCA)</option>
                    <option>Certification in Web Development (CWD)</option>
                    <option>Certification in Accouting & Office (CAO)</option>
                    <option>Tally Prime</option>
                    <option>Python</option>
                    <option>AI & Data Science</option>
                  </Form.Select>
                </div>

                <div className="col-md-6 d-flex flex-column">
                  <Form.Label>Select Duration</Form.Label>
                  <Form.Select
                    onChange={(data) => setDuration(data.target.value)}
                    value={duration}
                  >
                    <option>01 Month</option>
                    <option>02 Month</option>
                    <option>03 Month</option>
                    <option>04 Month</option>
                    <option>05 Month</option>
                    <option>06 Month</option>
                    <option>07 Month</option>
                    <option>08 Month</option>
                    <option>09 Month</option>
                    <option>10 Month</option>
                    <option>11 Month</option>
                  </Form.Select>
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Registration Fees</Form.Label>
                    <Form.Control
                      onChange={(data) =>
                        setRegistrationfees(data.target.value)
                      }
                      type="text"
                      placeholder="Enter Registration Fees"
                      value={rfees}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formBasicContact">
                    <Form.Label>Monthly Fees</Form.Label>
                    <Form.Control
                      onChange={(data) => setFees(data.target.value)}
                      type="text"
                      placeholder="Number"
                      value={fees}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>

            {showAlert && (
              <Alert key="danger" variant="danger">
                {alertMessage}
              </Alert>
            )}

            <div style={{ marginTop: "20px" }}>
              <center>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginRight: "10px" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button variant="primary" type="button">
                  Reset
                </Button>
              </center>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
