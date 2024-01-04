import "./App.css";
import Landing from "./components/Landing";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnxZ_-I0FXUiRX5d9L4vPmiRIqs4GoX6k",
  authDomain: "strivera2z.firebaseapp.com",
  projectId: "strivera2z",
  storageBucket: "strivera2z.appspot.com",
  messagingSenderId: "1075429667041",
  appId: "1:1075429667041:web:2dd831c4a2ea72a5ec07a0",
  measurementId: "G-0ZSX6EJBRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
