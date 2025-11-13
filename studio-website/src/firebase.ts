// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOI0Gw1qKJMH9qevVURn6qPDUTkulj7zg",
  authDomain: "code-bear-38393.firebaseapp.com",
  projectId: "code-bear-38393",
  storageBucket: "code-bear-38393.firebasestorage.app",
  messagingSenderId: "752834253353",
  appId: "1:752834253353:web:3ee2c98f471cebc8830238",
  measurementId: "G-PB5Y7MSWWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
