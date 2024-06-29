// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB26zlz3U_H0FPTQVVQV6aFrpC7IbAP2yQ",
  authDomain: "final-ba168.firebaseapp.com",
  projectId: "final-ba168",
  storageBucket: "final-ba168.appspot.com",
  messagingSenderId: "791538356874",
  appId: "1:791538356874:web:b36b36efd499cc765d9373",
  measurementId: "G-5RYYZNRDTC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
