// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import "firebase/database";
//import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM3vtkmc1S1LtNTiZcdr7cVH_uBQ9oBks",
  authDomain: "faction-com-edu.firebaseapp.com",
  projectId: "faction-com-edu",
  storageBucket: "faction-com-edu.appspot.com",
  messagingSenderId: "417614824866",
  appId: "1:417614824866:web:a814e17f66a09474ae1efb",
  measurementId: "G-2KFL2EJ8JV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

//Intialise Realtime
//const database = firebase.database;

export { db };
