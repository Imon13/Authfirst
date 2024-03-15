// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9V01H3GSzkOMVb_4c5LmYBdxv-8rQ6R4",
  authDomain: "auth-5ffc8.firebaseapp.com",
  projectId: "auth-5ffc8",
  storageBucket: "auth-5ffc8.appspot.com",
  messagingSenderId: "757288915238",
  appId: "1:757288915238:web:01098ffa544bccd08631e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;