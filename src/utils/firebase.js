import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJo4qqtJlF2h8jQXHIrJg0_A3LSm0QQnE",
  authDomain: "bankapp-8726d.firebaseapp.com",
  projectId: "bankapp-8726d",
  storageBucket: "bankapp-8726d.appspot.com",
  messagingSenderId: "343555336042",
  appId: "1:343555336042:web:d109218ff9323a1e866713"

};

firebase.initializeApp(firebaseConfig);

// Utils 
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

// Exports 
export { auth, storage, db };
