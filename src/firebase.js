// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd_j28dAgEdm-U6lCyy2MjhviRR1KaxwE",
  authDomain: "embed-cc515.firebaseapp.com",
  projectId: "embed-cc515",
  storageBucket: "embed-cc515.appspot.com",
  messagingSenderId: "401511449193",
  appId: "1:401511449193:web:1cde2a5768817dad8598f8",
  measurementId: "G-LNKTSRH1NG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
