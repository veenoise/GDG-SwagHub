import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Use your own firebase config
const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXXX",
  measurementId: "XXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };