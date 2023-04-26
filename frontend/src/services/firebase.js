// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbKOM0SKtk5xaaTVZG1YHCn6U8_4Gc6hg",
  authDomain: "bear-grease.firebaseapp.com",
  projectId: "bear-grease",
  storageBucket: "bear-grease.appspot.com",
  messagingSenderId: "168680487501",
  appId: "1:168680487501:web:00e22c38bb0a6e5e62fa04",
  measurementId: "G-YQMPDFJGQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const authenticator = getAuth(app);

export default app;