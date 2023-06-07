// Import the Firebase SDK
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9EHdz97GaYT-ppJ9WddOckUEgbjPZZns",
  authDomain: "eduhelp-bcf7d.firebaseapp.com",
  databaseURL: "https://eduhelp-bcf7d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eduhelp-bcf7d",
  storageBucket: "eduhelp-bcf7d.appspot.com",
  messagingSenderId: "399207158671",
  appId: "1:399207158671:web:5b3f03eb619b15a1c2f1fa"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

