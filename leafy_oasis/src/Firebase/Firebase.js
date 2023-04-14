// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSEqiSkuJcDIHw1RIkOZjhghLFZWRz0zU",
  authDomain: "leafy-oasis.firebaseapp.com",
  projectId: "leafy-oasis",
  storageBucket: "leafy-oasis.appspot.com",
  messagingSenderId: "425784309864",
  appId: "1:425784309864:web:cd28c1caafa6e3031163dd",
  measurementId: "G-F9PBDWJ93F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;