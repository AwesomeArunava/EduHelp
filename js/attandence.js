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
   var targetDiv = document.getElementById('v-pills-tab');

   // Assuming the URL is: https://example.com/page?param1=value1&param2=value2

// Get the current URL
const url = new URL(window.location.href);

// Access the query parameters
const params = new URLSearchParams(url.search);
const classCode = params.get('classCode'); // "value1"
console.log(classCode);
// Use the values as needed


// student list show
document.addEventListener('DOMContentLoaded', function() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'teachers')).then((snapshot) => {
    if (snapshot.exists()) {
      const teachersData = snapshot.val();
      var classroomData = teachersData[userId].classrooms;

      for (const key in classroomData) {
        if (classroomData.hasOwnProperty(key)) {
          console.log(classroomData[classCode]);
          const element = classroomData[classCode];
          // console.log(element);
          const studensList = element.students;
          // console.log('User Id is:', studensList);
          for(const key in studensList){
            
            var studentId = studensList[key].studentUID;
            // console.log(studentId.studentUID);
            //student name list
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'users')).then((snapshot) => {
              if (snapshot.exists()) {
                const studentsData = snapshot.val();
                var studentName = studentsData[studentId].studentInfo.student_name;
                console.log(studentName);

                              // Inside the loop
var b = document.createElement('div');
// b.classList.add('col-sm-6', 'mt-3');

// Generate a unique key using `key` and timestamp
var uniqueKey = key + '-' + Date.now();

// Generate unique IDs for the elements within each div
var studentNameId = "StudentName-" + uniqueKey;


// Set the card content
b.innerHTML = ` <div class="card">
  <div class="card-body">
    <h5 class="card-title" id="${studentNameId}"></h5>
    
  </div>
</div>`;

// Append the card to the target <div>
targetDiv.appendChild(b);

// Set the value of the elements within the current div
document.getElementById(studentNameId).textContent = studentName;

              }
            })
          
        }
        break;
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