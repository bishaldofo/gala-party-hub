// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHuwi7M_lgscXhjFM3bfQoYFXWSDou6Mc",
  authDomain: "gala-party-hub.firebaseapp.com",
  projectId: "gala-party-hub",
  storageBucket: "gala-party-hub.appspot.com",
  messagingSenderId: "375978647417",
  appId: "1:375978647417:web:85756acea5852a29e4d9a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;