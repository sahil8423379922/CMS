import React, { useState } from "react";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import Title_and_logo from "./components/upperbranding/Title_and_logo";
import Options from "./components/Options/Options";
import { db } from "./components/auth/firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <Title_and_logo />
      <Options />
      <UserRegistration />
    </>
  );
}
