
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyD9EHdz97GaYT-ppJ9WddOckUEgbjPZZns",
  authDomain: "eduhelp-bcf7d.firebaseapp.com",
  databaseURL: "https://eduhelp-bcf7d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eduhelp-bcf7d",
  storageBucket: "eduhelp-bcf7d.appspot.com",
  messagingSenderId: "399207158671",
  appId: "1:399207158671:web:5b3f03eb619b15a1c2f1fa"
};

  const app = initializeApp(firebaseConfig);


  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/4C4uOhhIvWePHdYgqiIUb7HTiF43`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log(data);
        document.getElementById("student_name").innerHTML = data.student_name;
      //   document.getElementById("profileEmail").innerHTML = data.email;
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  