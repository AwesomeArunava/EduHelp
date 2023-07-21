// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
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

signup.addEventListener('click', (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 

      alert("User Created.");
      // fetch uid
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const userId = user.uid;
          console.log(userId)
        o
          // write on data base

          function writeUserData(userId, name, email) {
            set(ref(database, 'users/' + userId), {
              student_name: name,
              email: email,

            });
          }
          writeUserData(userId, name, email);
        } else {
          console("Did not find UID");
        }
      });

      emailVerification()
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });

  // console.log(userId)
  console.log(name);
  console.log(email);


})

signin.addEventListener('click', (f) => {

  var email = document.getElementById("signEmail").value;
  var password = document.getElementById("signPassword").value;

  signInWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {

      // Signed in 
      const user = userCredential.user;
      if (user.emailVerified) {
        alert("Login Successful 👌");
        // uid fetch
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid);
          const teacherEmail = user.email;
          localStorage.setItem('teacherEmail', teacherEmail);

            const data = {
              name: "Arunava",
              email: "arun@gmail.com",
              uid: uid
            };

            sessionStorage.setItem('data', JSON.stringify(data));
            // window.location.href = '/bootDash.html';
            // console.log(uid)
            // ...
          } else {
            console("Did not find UID");
          }
        });
        // window.location.assign('dashboard.php');

      }
      else {
        alert("Verify your email");
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})

// Send email verification link 

const emailVerification = () => {

  sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("For Login verify your email.");
    });
}