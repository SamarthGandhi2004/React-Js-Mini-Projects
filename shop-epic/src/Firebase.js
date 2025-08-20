// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi6kLpNeu06Oyy9SVYaewaa4Ye-t4TPsk",
  authDomain: "ecom-20976.firebaseapp.com",
  projectId: "ecom-20976",
  storageBucket: "ecom-20976.firebasestorage.app",
  messagingSenderId: "628000674772",
  appId: "1:628000674772:web:f573164760e44af6f3fc41",
  measurementId: "G-X3QFV1EFC2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider;
const analytics = getAnalytics(app);