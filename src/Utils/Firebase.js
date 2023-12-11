// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApLWzuG3k4TYbOJSrdpMwfJhtC5ReC-Ok",
  authDomain: "my-netflix-gpt-f511f.firebaseapp.com",
  projectId: "my-netflix-gpt-f511f",
  storageBucket: "my-netflix-gpt-f511f.appspot.com",
  messagingSenderId: "439586127624",
  appId: "1:439586127624:web:491744c089d631150176bd",
  measurementId: "G-R06E33HT3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();