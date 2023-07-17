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
   const UserId = localStorage.getItem('userId');
   console.log(UserId);
var createButton = document.getElementById('join');
createButton.addEventListener('click', function() {

  var classroomCode = document.getElementById('classroomCode').value;
//

const dbRef = ref(getDatabase());
get(child(dbRef, 'teachers')).then((snapshot) => {
  if (snapshot.exists()) {
    const teachersData = snapshot.val();
    // var classroomData = teachersData[UserId].classrooms;
    // console.log(teachersData)
    for (const key in teachersData) {
      if (teachersData.hasOwnProperty(key)) {
        const element = teachersData[key];
        // console.log(element);
      
        
          if(element.hasOwnProperty("classrooms")){
            console.log(element.classrooms);
            const classCode = element.classrooms;
            if(classCode.hasOwnProperty(classroomCode)){
              console.log(classCode[classroomCode].userId);
              const teacherUserId = classCode[classroomCode].userId;
              writeNewPost(teacherUserId, classroomCode);
              joinCourse(UserId, classroomCode);
            break;
            }
          }
        
        // console.log(a);
        // if(a.hasOwnProperty(classrooms)){
          
          
          // if(element.hasOwnProperty(key)){
            // const a = element.classrooms[classroomCode];
            
          // console.log(element.classrooms);
          // console.log(a.classroomCode);
          
          // }
      // }
    //     for(const key in element){
    //     if(element.hasOwnProperty(key)){

          
    //      var classroomData = element[key];
    //     //  if(classroomData.userId==classroomCode){
    //       console.log(classroomData);
    //       const teacherUserId = classroomData.userId;
    //       // console.log('User Id is:', teacherUserId);
    //       // writeUserData(teacherUserId, classroomCode);
    //       writeNewPost(teacherUserId, classroomCode);
    //       joinCourse(UserId, classroomCode);
    //       break;
    //     //  }
    //   }
    // }
      }
    }
    
  } else {
    console.log('No data available1');
  }
}).catch((error) => {
  console.error(error);
});






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


  // Reset the input fields
  // document.getElementById('classroom-name').value = '';
  // document.getElementById('teacher-name').value = '';
  // document.getElementById('semester').value = '';
  // document.getElementById('classroom-code').value = classroomCode;
});

// course list show
const dbRef = ref(getDatabase());
get(child(dbRef, 'users')).then((snapshot) => {
  if (snapshot.exists()) {
    const studentsData = snapshot.val();
    const b = studentsData;
    console.log(b);
    console.log(UserId);
   var classroom = studentsData[UserId].classrooms;
  //  console.log(classroom);
 
   
//     for (const key in classroom) {
//     //  console.log(studentsData);
//       var classroomKey = classroom[key];
//       var classroomCode = classroomKey.classroomCode;
//       var codes = new Array();
//       codes.push(classroomCode);
//       console.log("hello");
//       get(child(dbRef, 'teachers')).then((snapshot) => {
//         if (snapshot.exists()) {
        
//         var teachersData = snapshot.val();
//         // console.log(teachersData);
//         for (const key in teachersData) {
//           if (teachersData.hasOwnProperty(key)) {
//             const element = teachersData[key];
//             // console.log(element);
//             if (element.hasOwnProperty(classroomCode)) {

//               console.log(element[classroomCode].classroomName);
//               const teacherUserId = element[classroomCode].userId;
//               console.log('User Id is:', teacherUserId);

              
//                // Create the card element
//   var b = document.createElement('div');
//   b.classList.add('col-sm-6', 'mt-3');

//   // Set the card content
//   b.innerHTML = ` <div class="card">
//   <div class="card-body">
//     <h5 class="card-title" id="ClassName"></h5>
//     <h6 class="card-title">Sem: <span id="sem"></span></h6>
//     <h6 class="card-title">Classroom Code: <span id="classCode"></span></h6>
//     <a href="#" class="btn btn-primary">Go to Classroom:</a>
//   </div>
// </div>`;

//   // Append the card to the document body
// //   document.body.appendChild(card);

// // Select the target <div> element
// var targetDiv = document.getElementById('course-list'); // Replace 'yourDivId' with the actual ID of your target <div>



// // Append the card to the target <div>
// targetDiv.appendChild(b);
// document.getElementById("ClassName").textContent = element[classroomCode].classroomName;            
// document.getElementById("sem").textContent = element[classroomCode].semester;
// document.getElementById("classCode").textContent = element[classroomCode].classroomCode; 
            
// }   }
          
//         }
          
//         } else {
//           console.log('No data available1');
//         }
//       }).catch((error) => {
//         console.error(error);
//       });
//     }

async function processClassrooms(targetDiv) {
  for (const key in classroom) {
    var classroomKey = classroom[key];
    var classroomCode = classroomKey.classroomCode;
    // var codes = new Array();
    // codes.push(classroomCode);
    // console.log("hello");
    console.log(classroomCode);

    try {
      const snapshot = await get(child(dbRef, 'teachers'));
      if (snapshot.exists()) {
        var teachersData = snapshot.val();
        for (const key in teachersData) {
          if (teachersData.hasOwnProperty(key)) {
            const element = teachersData[key];
            if (element.hasOwnProperty("classrooms")) {
              console.log(element.classrooms[classroomCode].classroomName);
              const teacherUserId = element.classrooms[classroomCode].userId;
              console.log('User Id is:', teacherUserId);

              // Inside the loop
var b = document.createElement('div');
b.classList.add('col-sm-6', 'mt-3');

// Generate a unique key using `key` and timestamp
var uniqueKey = key + '-' + Date.now();

// Generate unique IDs for the elements within each div
var classNameId = "ClassName-" + uniqueKey;
var semId = "sem-" + uniqueKey;
var classCodeId = "classCode-" + uniqueKey;

// Set the card content
b.innerHTML = ` <div class="card">
  <div class="card-body">
    <h5 class="card-title" id="${classNameId}"></h5>
    <h6 class="card-title">Sem: <span id="${semId}"></span></h6>
    <h6 class="card-title">Classroom Code: <span id="${classCodeId}"></span></h6>
    <a href="attandence.html" class="btn btn-primary">Go to Classroom:</a>
  </div>
</div>`;

// Append the card to the target <div>
targetDiv.appendChild(b);

// Set the value of the elements within the current div
document.getElementById(classNameId).textContent = element.classrooms[classroomCode].classroomName;
document.getElementById(semId).textContent = element.classrooms[classroomCode].semester;
document.getElementById(classCodeId).textContent = element.classrooms[classroomCode].classroomCode;

        break;    }
          }
        }
      } else {
        console.log('No data available1');
      }
    } catch (error) {
      console.error(error);
    }
  }
}

// Select the target <div> element
var targetDiv = document.getElementById('course-list');

// Call the function and pass the targetDiv as a parameter
processClassrooms(targetDiv);


    
  } else {
    console.log('No data available1');
  }
}).catch((error) => {
  console.error(error);
});

// Student Data write and Read code

function writeUserData(teacherUserId, classroomCode) {
  const db = getDatabase();
  set(ref(db, 'teachers/' + teacherUserId + '/' + classroomCode + '/students'), {
    studentUID: UserId,
  });
}


// update

// import { getDatabase, ref, child, push, update } from "firebase/database";

function writeNewPost(teacherUserId, classroomCode) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    studentUID: UserId,
  };

  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['teachers/' + teacherUserId + '/classrooms/' + classroomCode + '/students/' + newPostKey] = postData;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}


function joinCourse(UserId, classroomCode) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    classroomCode: classroomCode,
  };

  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['users/' + UserId + '/classrooms/' + newPostKey] = postData;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}



// logout code is here

function loginPage(){
   window.location.href = "login.html";
}

var logOut = document.getElementById("logOut");
logOut.addEventListener("click", handleLogout);


//Notice 

