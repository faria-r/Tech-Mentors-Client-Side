// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVF1mOf_0oWlqMuWnvCw-Yq7ut-xGurGk",
  authDomain: "tech-mentors-2221d.firebaseapp.com",
  projectId: "tech-mentors-2221d",
  storageBucket: "tech-mentors-2221d.appspot.com",
  messagingSenderId: "502138781331",
  appId: "1:502138781331:web:caaf8083c3125386fc5766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app