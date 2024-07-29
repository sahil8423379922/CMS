import React, { useEffect, useState } from "react";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import Title_and_logo from "./components/upperbranding/Title_and_logo";
import Options from "./components/Options/Options";
import { db } from "./components/auth/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Dahboard from "./components/dashboard/Dahboard.jsx";
import FeeSubmission from "./components/fee/FeeSubmission.jsx";
import ExistingStudent from "./components/existing/ExistingStudent.jsx";

export default function App() {
  const [currentcom, setcomp] = useState(0);

  const handelswitch = (val) => {
    setcomp(val);
  };

  return (
    <>
      <Title_and_logo />
      <Options handelswitch={handelswitch} />
      {currentcom === 0 && <Dahboard />}
      {currentcom === 1 && <UserRegistration />}
      {currentcom === 2 && <ExistingStudent />}
      {currentcom === 3 && <FeeSubmission />}
    </>
  );
}
