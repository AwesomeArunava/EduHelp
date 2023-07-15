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



// add course card logic

var createButton = document.getElementById('create');
createButton.addEventListener('click', function() {
  var classroomName = document.getElementById('classroom-name').value;
  var teacherName = document.getElementById('teacher-name').value;
  var semester = document.getElementById('semester').value;
  var classroomCode = generateClassroomCode();
  const userId = localStorage.getItem('userId');
  // Create the card element
  var b = document.createElement('div');
  b.classList.add('col-sm-6', 'mt-3');

  // Set the card content
  b.innerHTML = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to
        additional content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;

  // Append the card to the document body
//   document.body.appendChild(card);

// Select the target <div> element
var targetDiv = document.getElementById('course-list'); // Replace 'yourDivId' with the actual ID of your target <div>

// Append the card to the target <div>
targetDiv.appendChild(b);

writeUserData(userId, classroomName, teacherName, semester, classroomCode);
  // Reset the input fields
  // document.getElementById('classroom-name').value = '';
  // document.getElementById('teacher-name').value = '';
  // document.getElementById('semester').value = '';
  // document.getElementById('classroom-code').value = classroomCode;
});

function generateClassroomCode() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var codeLength = 6;
  var code = '';

  for (var i = 0; i < codeLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}

// data base code



function writeUserData(userId, classroomName, teacherName, semester, classroomCode) {
  const db = getDatabase();
  set(ref(db, 'teachers/' + userId + '/' + classroomCode ), {
    classroomName: classroomName,
    teacherName: teacherName,
    semester : semester,
    classroomCode : classroomCode,
    userId : userId
  });
}



createButton.addEventListener('click', ()=>{
  // var classroomName = document.getElementById('classroom-name').value;
  // var teacherName = document.getElementById('teacher-name').value;
  document.getElementById('semester').value;
  
})

//----------------------

const showCardButton = document.getElementById('show-card-button');
const profileCard = document.getElementById('profile-card');



// let visible = false;

// show-card-button.addEventListener("click", () => {
//   visible = !visible;
//   if (visible) {
//     profileCard.style.display = "block";
//   } else {
//     profileCard.style.display = "none";
//   }
// });



// const logoutButton = document.querySelector('.logout-button');

// logoutButton.addEventListener('click', () => {

  
// });

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


function loginPage(){
  window.location.href = "teacher-login.html";
    // Perform logout action here
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}

var logOut = document.getElementById("logOut");
logOut.addEventListener("click", handleLogout);