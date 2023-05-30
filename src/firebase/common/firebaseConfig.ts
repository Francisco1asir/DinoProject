// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAHQ9NPRcJdqwCs0EdP1AvSD5-dVsC-tMw",
  authDomain: "dinosaurios-2a7e5.firebaseapp.com",
  projectId: "dinosaurios-2a7e5",
  storageBucket: "dinosaurios-2a7e5.appspot.com",
  messagingSenderId: "1094139533862",
  appId: "1:1094139533862:web:036512a0b3bb3c0727a4e7",
  measurementId: "G-KVKTYFQB69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

//monstar la ventana de elegir cuenta
provider.setCustomParameters({ prompt: 'select_account' });
export {auth,provider}
