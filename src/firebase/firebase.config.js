// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGooPygvv-sT9x8RgTa6OPqe5Oj28BEwQ",
  authDomain: "dragon-news-2ca6a.firebaseapp.com",
  projectId: "dragon-news-2ca6a",
  storageBucket: "dragon-news-2ca6a.appspot.com",
  messagingSenderId: "1093665363905",
  appId: "1:1093665363905:web:ccf1630ebe0f515a73c140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;