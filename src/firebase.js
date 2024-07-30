// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrxz_MLDCxoE6TmPqUtMe-hU17dpX42Cc",
  authDomain: "web1-e1c53.firebaseapp.com",
  projectId: "web1-e1c53",
  storageBucket: "web1-e1c53.appspot.com",
  messagingSenderId: "837115937941",
  appId: "1:837115937941:web:7bcbd48b8c28662a1f879c",
  measurementId: "G-BE2PYBXZ75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };