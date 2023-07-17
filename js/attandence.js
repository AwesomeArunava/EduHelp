   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
   import { getDatabase, ref, set, child, get, push, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
   const userId = localStorage.getItem('userId');
   console.log(userId);

// student list show
document.addEventListener('DOMContentLoaded', function() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'teachers')).then((snapshot) => {
    if (snapshot.exists()) {
      const teachersData = snapshot.val();
      var classroomData = teachersData[userId].classrooms;

      for (const key in classroomData) {
        if (classroomData.hasOwnProperty(key)) {
          const element = classroomData[key];
          const teacherUserId = element.userId;
          console.log('User Id is:', teacherUserId);

          var b = document.createElement('div');
          b.classList.add('col-sm-6', 'mt-3');

          var uniqueKey = key + '-' + Date.now();
          var classNameId = "ClassName-" + uniqueKey;
          var semId = "sem-" + uniqueKey;
          var classCodeId = "classCode-" + uniqueKey;

          b.innerHTML = ` <div class="card">
            <div class="card-body">
              <h5 class="card-title" id="${classNameId}"></h5>
              <h6 class="card-title">Sem: <span id="${semId}"></span></h6>
              <h6 class="card-title">Classroom Code: <span id="${classCodeId}"></span></h6>
              <a href="#" class="btn btn-primary">Go to Classroom:</a>
            </div>
          </div>`;

          var targetDiv = document.getElementById('course-list');
          targetDiv.appendChild(b);

          // Set the value of the elements within the current div
          var classNameElement = document.getElementById(classNameId);
          if (classNameElement) {
            classNameElement.textContent = element.classroomName;
          }

          var semElement = document.getElementById(semId);
          if (semElement) {
            semElement.textContent = element.semester;
          }

          var classCodeElement = document.getElementById(classCodeId);
          if (classCodeElement) {
            classCodeElement.textContent = element.classroomCode;
          }
        }
      }
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.error(error);
  });
});

// For Card show on click

const showCardButton = document.getElementById('show-card-button');
const profileCard = document.getElementById('profile-card');

let visible = false;

showCardButton.addEventListener("click", () => {
  visible = !visible;
  if (visible) {
    profileCard.style.display = "block";
  } else {
    profileCard.style.display = "none";
  }
});