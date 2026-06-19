// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyD1aaZ17ouY9kMcXD6ZOfLRYu8I6vFQeRw",
  authDomain: "emboa-gov.firebaseapp.com",
  projectId: "emboa-gov",
  storageBucket: "emboa-gov.firebasestorage.app",
  messagingSenderId: "924026597014",
  appId: "1:924026597014:web:fed6107097925dbbaa5cb7",
  measurementId: "G-SN1DMBREXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);