// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALlD0Z6O3HmHQvysfAxtWkXUnZ-Mq1vn0",
  authDomain: "jobfinder-c33d8.firebaseapp.com",
  projectId: "jobfinder-c33d8",
  storageBucket: "jobfinder-c33d8.firebasestorage.app",
  messagingSenderId: "1084828627436",
  appId: "1:1084828627436:web:513e067ae800fe7cca90c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
