import React, { useEffect, useState } from "react";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import QualificationTable from "./QuallificationDetails";
import style from "./css/UserRegistration.module.css";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../auth/firebase";

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
  const [stuId, setStudentID] = useState();
  const [studentStatus, setStudentStatus] = useState("");

  // State for alert
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleQualificationsData = (qualifications) => {
    setQua(qualifications);
  };

  // Function to get the next document ID
  const getNextDocumentId = async () => {
    try {
      const snapshot = await getDocs(collection(db, "StudentInfo"));
      const numDocs = snapshot.size;
      setStudentID(numDocs + 1);
      //return numDocs + 1;
    } catch (error) {
      console.error("Error getting document count: ", error);
      throw error;
    }
  };

  const addDataToFirestore = async (data) => {
    try {
      const docRef = doc(db, "StudentInfo", stuId.toString());
      await setDoc(docRef, data);
      console.log("Document written with ID: ", nextId);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const sendRTDBData = (path, data) => {
    // database
    //   .ref(path)
    //   .set(data)
    //   .then(() => {
    //     console.log("Data sent successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error sending data:", error);
    //   });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let message = "";

    // Validation rules
    if (studentStatus.trim === "") {
      message += "Please select the Stuent Status\n";
    } else if (name.trim() === "") {
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
    } else if (fathercontact.trim() === "") {
      message += "Please enter the Contact Number.\n";
    } else if (duration.trim() === "") {
      message += "Please enter the Duration.\n";
    } else if (rfees.trim() === "") {
      message += "Please enter the Registration Fees.\n";
    } else if (fees.trim() === "") {
      message += "Please enter the Monthly Fees.\n";
    } else {
      setShowAlert(false);

      const data = {
        FirstName: name,
        LastName: lname,
        dob: dob,
        Contact: contact,
        Category: category,
        Gender: gender,
        BloodGroup: bloodgroup,
        Father: father,
        Mother: mother,
        Occupation: occupation,
        FatherContact: fathercontact,
        Course: course,
        Duration: duration,
        RegistrationFees: rfees,
        MonthlyFees: fees,
        Quallification: qua,
      };

      //Set Status Acknowledgement
      if (studentStatus === "Active") {
        console.log("Student is active");
        sendRTDBData("StudentInfo/active", { stuId: name + " " + lname });
      } else {
        console.log("Student is not active");
        sendRTDBData("StudentInfo/notactive", { stuId: name + " " + lname });
      }

      //sendind data to store
      addDataToFirestore(data);

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

  //fetching student ID on the start of the application
  useEffect(() => {
    getNextDocumentId();
  }, []);

  const handleReset = () => {
    setName("");
    setLname("");
    setDob("");
    setContact("");
    setCategory("");
    setGender("");
    setBloodgroup("");
    setFather("");
    setMother("");
    setOccupation("");
    setFathercontact("");
    setCourse("");
    setDuration("");
    setRegistrationfees("");
    setFees("");
    setQua("");
    setShowAlert(false);
    setAlertMessage("");
    setQua([]);
  };

  return (
    <>
      <div style={{ backgroundColor: "#FFFDD0" }} className="pt-5 pb-5">
        <div className="container p-5 " style={{ backgroundColor: "white" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Student Registration ID"
                    value={"FCE/01/" + stuId}
                    disabled // This makes the field non-editable
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Select Status</Form.Label>
                  <Form.Select
                    onChange={(data) => setStudentStatus(data.target.value)}
                    value={category}
                  >
                    <option>Active</option>
                    <option>Not Active</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Form.Group>
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
                <Button variant="primary" type="button" onClick={handleReset}>
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
