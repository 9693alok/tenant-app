import React, { useEffect } from "react";
import { auth, db } from "../config/firebase"; // import your firebase config

const TestFirebase = () => {
  useEffect(() => {
    console.log("Firebase Auth:", auth);
    console.log("Firestore DB:", db);
  }, []);

  return <div>Firebase Initialized! Check console.</div>;
};

export default TestFirebase;
