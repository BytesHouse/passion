// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzm8fLN1gyUEchwCJ5zgLi8XWkKWnzAyU",
    authDomain: "maracuya-98e68.firebaseapp.com",
    projectId: "maracuya-98e68",
    storageBucket: "maracuya-98e68.appspot.com",
    messagingSenderId: "567036100758",
    appId: "1:567036100758:web:c0b2dd593380450bc802b7",
    measurementId: "G-T7QFVGS3R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };