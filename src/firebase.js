import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase project configuration
// IMPORTANT: Make sure your personal configuration keys are placed here.
const firebaseConfig = {
  apiKey: "AIzaSyD1Ln318H6jzHP8uR2AYR3l9sPzYxSAPKs",
  authDomain: "eviltwins-3b5dd.firebaseapp.com",
  projectId: "eviltwins-3b5dd",
  storageBucket: "eviltwins-3b5dd.appspot.com",
  messagingSenderId: "778606183761",
  appId: "1:778606183761:web:9b7acb8517074e9eee3f70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
