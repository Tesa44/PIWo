// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxhXq48IzoQZdB8dV2XCapokjeHTBo7WQ",
  authDomain: "the-hoppy-library.firebaseapp.com",
  projectId: "the-hoppy-library",
  storageBucket: "the-hoppy-library.firebasestorage.app",
  messagingSenderId: "442584017941",
  appId: "1:442584017941:web:dd43fda736039638a5b21c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
