    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
    import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
    import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyD9EHdz97GaYT-ppJ9WddOckUEgbjPZZns",
      authDomain: "eduhelp-bcf7d.firebaseapp.com",
      databaseURL: "https://eduhelp-bcf7d-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "eduhelp-bcf7d",
      storageBucket: "eduhelp-bcf7d.appspot.com",
      messagingSenderId: "399207158671",
      appId: "1:399207158671:web:5b3f03eb619b15a1c2f1fa"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    export default {firebaseConfig, app, database, auth, provider};

  