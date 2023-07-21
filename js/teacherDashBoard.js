   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
   import { getDatabase, ref, set, child, get, push, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
   import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, sendEmailVerification, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
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
//profile name and email
const teacherName = localStorage.getItem('teacherName');
const teacherEmail = localStorage.getItem('teacherEmail');
document.getElementById("profileName").textContent = teacherName;
document.getElementById("profileEmail").textContent = teacherEmail;
// add course card logic

var createButton = document.getElementById('create');
createButton.addEventListener('click', function() {
  var classroomName = document.getElementById('classroom-name').value;
  var teacherName = document.getElementById('teacher-name').value;
  var semester = document.getElementById('semester').value;
  var classroomCode = generateClassroomCode();
  
  console.log(userId);
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
  set(ref(db, 'teachers/' + userId + '/classrooms/' + classroomCode ), {
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


// classroom show

// const dbRef = ref(getDatabase());
// get(child(dbRef, 'teachers')).then((snapshot) => {
//   if (snapshot.exists()) {
//     const teachersData = snapshot.val();
//     // console.log(teachersData[userId].classrooms);
//     var classroomData = teachersData[userId].classrooms;
   
//     for (const key in classroomData) {
//       if (classroomData.hasOwnProperty(key)) {
//         const element = classroomData[key];
//         // console.log(element);
       
          
//           const teacherUserId = element.userId;
//           console.log('User Id is:', teacherUserId);
          
//           // card create

//           var b = document.createElement('div');
// b.classList.add('col-sm-6', 'mt-3');

// // Generate a unique key using `key` and timestamp
// var uniqueKey = key + '-' + Date.now();

// // Generate unique IDs for the elements within each div
// var classNameId = "ClassName-" + uniqueKey;
// var semId = "sem-" + uniqueKey;
// var classCodeId = "classCode-" + uniqueKey;

// // Set the card content
// b.innerHTML = ` <div class="card">
//   <div class="card-body">
//     <h5 class="card-title" id="${classNameId}"></h5>
//     <h6 class="card-title">Sem: <span id="${semId}"></span></h6>
//     <h6 class="card-title">Classroom Code: <span id="${classCodeId}"></span></h6>
//     <a href="#" class="btn btn-primary">Go to Classroom:</a>
//   </div>
// </div>`;

// // Append the card to the target <div>


// // Set the value of the elements within the current div
// document.getElementById(classNameId).textContent = element.classroomName;
// document.getElementById(semId).textContent = element.semester;
// document.getElementById(classCodeId).textContent = element.classroomCode;
// var targetDiv = document.getElementById('course-list');
// targetDiv.appendChild(b);
        
//       }
//     }
    
//   } else {
//     console.log('No data available1');
//   }
// }).catch((error) => {
//   console.error(error);
// });


// card create

// document.addEventListener('DOMContentLoaded', function() {
//   const dbRef = ref(getDatabase());
//   get(child(dbRef, 'teachers')).then((snapshot) => {
//     if (snapshot.exists()) {
//       const teachersData = snapshot.val();
//       var classroomData = teachersData[userId].classrooms;

//       for (const key in classroomData) {
//         if (classroomData.hasOwnProperty(key)) {
//           const element = classroomData[key];
//           const teacherUserId = element.userId;
//           console.log('User Id is:', teacherUserId);

//           var b = document.createElement('div');
//           b.classList.add('col-sm-6', 'mt-3');

//           var uniqueKey = key + '-' + Date.now();
//           var classNameId = "ClassName-" + uniqueKey;
//           var semId = "sem-" + uniqueKey;
//           var classCodeId = "classCode-" + uniqueKey;

//           b.innerHTML = ` <div class="card">
//             <div class="card-body">
//               <h5 class="card-title" id="${classNameId}"></h5>
//               <h6 class="card-title">Sem: <span id="${semId}"></span></h6>
//               <h6 class="card-title">Classroom Code: <span id="${classCodeId}"></span></h6>
//               <a href="#" class="btn btn-primary">Go to Classroom:</a>
//             </div>
//           </div>`;

//           document.getElementById(classNameId).textContent = element.classroomName;
//           document.getElementById(semId).textContent = element.semester;
//           document.getElementById(classCodeId).textContent = element.classroomCode;
//           var targetDiv = document.getElementById('course-list');
//           targetDiv.appendChild(b);
//         }
//       }
//     } else {
//       console.log('No data available');
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// });


// card create

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
          const teacherName = element.teacherName;
          console.log(teacherName);
          console.log('User Id is:', teacherUserId);
          localStorage.setItem('teacherName', teacherName);
          var b = document.createElement('div');
          b.classList.add('col-sm-6', 'mt-3');

          var uniqueKey = key + '-' + Date.now();
          var classNameId = "ClassName-" + uniqueKey;
          var semId = "sem-" + uniqueKey;
          var classCodeId = "classCode-" + uniqueKey;
          var classroomCode = element.classroomCode;
          console.log(classroomCode);
          b.innerHTML = ` <div class="card">
            <div class="card-body">
              <h5 class="card-title" id="${classNameId}"></h5>
              <h6 class="card-title">Sem: <span id="${semId}"></span></h6>
              <h6 class="card-title">Classroom Code: <span id="${classCodeId}"></span></h6>
              <a href="attandence.html?classCode=${classroomCode}">Go to Classroom:</a>
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


// function loginPage(){
//   window.location.href = "teacher-login.html";
//     // Perform logout action here
//     signOut(auth).then(() => {
//       // Sign-out successful.
//     }).catch((error) => {
//       // An error happened.
//     });
// }

// var logOut = document.getElementById("logOut");
// logOut.addEventListener("click", handleLogout);
// Check authentication status on every page
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // If user is not authenticated, redirect to login page
    window.location.href = 'teacher-login.html';
  }
});

// logout code is here

function loginPage(){
  

  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "teacher-login.html";
    // Clear the localStorage
localStorage.clear();

  }).catch((error) => {
    // An error happened.
  });
}

var logOut = document.getElementById("logOut");
logOut.addEventListener("click", loginPage);
