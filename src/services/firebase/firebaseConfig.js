// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "gintraders-app.firebaseapp.com",
  projectId: "gintraders-app",
  storageBucket: "gintraders-app.appspot.com",
  messagingSenderId: "738652242412",
  appId: "1:738652242412:web:5dd1452d823b161ac6c0c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

