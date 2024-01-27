// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDGI0sEbjl_dCrLb_eG48sWPeFq_yVCvs",
  authDomain: "netflix-gpt-42fb3.firebaseapp.com",
  projectId: "netflix-gpt-42fb3",
  storageBucket: "netflix-gpt-42fb3.appspot.com",
  messagingSenderId: "266115677764",
  appId: "1:266115677764:web:f3ed79601820e5222a8611",
  measurementId: "G-3HLGVY7L0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();