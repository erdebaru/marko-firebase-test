// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDdY3dRBITNGEucDPckNO5lL4MoLz7wpLU",
  authDomain: "beginning-b5677.firebaseapp.com",
  projectId: "beginning-b5677",
  storageBucket: "beginning-b5677.appspot.com",
  messagingSenderId: "588837256786",
  appId: "1:588837256786:web:cadcf22ffbec198045298b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app); //Enabling analytics will thrown window is not defined error