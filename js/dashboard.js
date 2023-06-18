import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9EHdz97GaYT-ppJ9WddOckUEgbjPZZns",
  authDomain: "eduhelp-bcf7d.firebaseapp.com",
  databaseURL:
    "https://eduhelp-bcf7d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eduhelp-bcf7d",
  storageBucket: "eduhelp-bcf7d.appspot.com",
  messagingSenderId: "399207158671",
  appId: "1:399207158671:web:5b3f03eb619b15a1c2f1fa",
};

// For Card show on click

const showCard = document.getElementById("show-card-button");
const profileCard = document.getElementById("profile-card");

let visible = false;

showCard.addEventListener("click", () => {
  visible = !visible;
  if (visible) {
    profileCard.style.display = "block";
  } else {
    profileCard.style.display = "none";
  }
});

// Fire Base

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log(user)

//   } else {
//     console.log("no data")
//   }
// });

// get data from login page

// Get the stored data from sessionStorage
const storedData = sessionStorage.getItem("data");

// Parse the JSON data into an object
const parsedData = JSON.parse(storedData);

// Access the properties of the object
console.log(parsedData.name); // Output: John
console.log(parsedData.uid); // Output: 30

// read data from database

const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const starCountRef = ref(db, 'users/' + parsedData.uid + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

// import { getDatabase,  } from "firebase/database";

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${parsedData.uid}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data);
      document.getElementById("profileName").innerHTML = data.student_name;
      document.getElementById("profileEmail").innerHTML = data.email;
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });


