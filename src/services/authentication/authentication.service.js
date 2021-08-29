import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlNXSAsvyNCSvPGKY7-bdm3Hqekn5SP2Y",
  authDomain: "mealstogo-f7ce0.firebaseapp.com",
  projectId: "mealstogo-f7ce0",
  storageBucket: "mealstogo-f7ce0.appspot.com",
  messagingSenderId: "744850689627",
  appId: "1:744850689627:web:dd2d35e68d840062d8b97e",
};

// if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
// }

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
