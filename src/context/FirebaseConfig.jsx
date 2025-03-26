import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeQOxPvKwHockHNDnJoME0SflfssL4bs",
  authDomain: "video-call-daily.firebaseapp.com",
  projectId: "video-call-daily",
  storageBucket: "video-call-daily.firebasestorage.app",
  messagingSenderId: "282525670122",
  appId: "1:282525670122:web:a76766d7c0b40d21075593",
  measurementId: "G-RLWZXL4R7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
