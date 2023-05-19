// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//console.log('Env',import.meta.env.VITE_apikey)
const firebaseConfig = {
    // apiKey:import.meta.env.VITE_apikey, 
    // authDomain:import.meta.env.VITE_authDomain, 
    // projectId:import.meta.env.VITE_projectId, 
    // storageBucket:import.meta.env.VITE_storageBucket,
    // messagingSenderId:import.meta.env.VITE_messagingSenderId, 
    // appId:import.meta.env.VITE_appId
  apiKey: "AIzaSyDuGCCgEsHicqf2cyRobgcR5T3utIjPKQY",
  authDomain: "learn-with-toys.firebaseapp.com",
  projectId: "learn-with-toys",
  storageBucket: "learn-with-toys.appspot.com",
  messagingSenderId: "301396476692",
  appId: "1:301396476692:web:168630fc71306c30177801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;