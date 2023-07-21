   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
   import { getDatabase, ref, set, child, get, push, update, onChildAdded } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
   var targetDiv = document.getElementById('v-pills-tab');
   var data = [];
   // Assuming the URL is: https://example.com/page?param1=value1&param2=value2

// Get the current URL
const url = new URL(window.location.href);

// Access the query parameters
const params = new URLSearchParams(url.search);
const classCode = params.get('classCode'); // "value1"
console.log(classCode);
const profileName= localStorage.getItem('teacherName');
const profileEmail = localStorage.getItem('teacherEmail');
document.getElementById("profileName").textContent = profileName;
document.getElementById("profileEmail").textContent = profileEmail;
// document.getElementById("profileEmail").textContent = teacherEmail;
// const profileEmail= localStorage.getItem('email');
 
//  document.getElementById("profileEmail").textContent = profileEmail;
// Use the values as needed
fetchTeacherId();

//  console.log("helooo fff");

// console.log(teacherName);
function fetchTeacherId(){
 
  const dbRef = ref(getDatabase());
    
  get(child(dbRef, 'teachers')).then((snapshot) => {
      if (snapshot.exists()) {
        var teachersData = snapshot.val();
        // console.log(teachersData);
        for (const key in teachersData) {
          if (teachersData.hasOwnProperty(key)) {
            const element = teachersData[key];
            // console.log(element);
            if (element.hasOwnProperty("classrooms")) {
              // console.log(element.classrooms);
              const allClass = element.classrooms;
              for(const key in allClass){
                // console.log(allClass[key].classroomCode);
                if(allClass[key].classroomCode === classCode){
                  // console.log(allClass[key].classroomCode);
                  //  console.log(allClass[key].teacherUserId);           
              // console.log(element.classrooms[classroomCode].classroomName);
              const teacherName = allClass[key].teacherName;
              console.log(teacherName);
              localStorage.setItem('teacherName', teacherName);
              break;
              // Inside the loop
                  
                }
              }



          }
          }
        }
      } else {
        console.log('No data available1');
      }
    
    });
  
  }
 

document.addEventListener('DOMContentLoaded', async function() {
  //  fetchMessage();
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
   
   
    if (snapshot.exists()) {
      const teachersData = snapshot.val();
      const classroomData = teachersData[userId].classrooms;
      
      for (const key in classroomData) {
        if (classroomData.hasOwnProperty(classCode)) {
          console.log(classroomData[key]);
          const element = classroomData[classCode];
          const studensList = element.students;
          
          for (const studentKey in studensList) {
            const studentId = studensList[studentKey].studentUID;
            console.log(studentId);
            
            const studentsSnapshot = await get(child(dbRef, 'users'));
            if (studentsSnapshot.exists()) {
              const studentsData = studentsSnapshot.val();
              const studentName = studentsData[studentId].studentInfo.student_name;
              console.log(studentName);
              
              // Inside the loop
              const b = document.createElement('div');
              const uniqueKey = key + '-' + Date.now();
              const studentNameId = "StudentName-" + uniqueKey;
              
              b.innerHTML = `<div class="card ">
                <div class="card-body d-flex justify-content-between">
                <img
                src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" class="chatProfileImg"
              />
                  <h5 class="card-title mt-2" id="${studentNameId}"></h5>
                  <i class="fa-solid fa-trash delete mt-3" id="remove"></i>
                </div>
              </div>`;
              
              // Append the card to the target <div>
              targetDiv.appendChild(b);
              
              // Set the value of the elements within the current div
              document.getElementById(studentNameId).textContent = studentName;
            }
          }
          break;
        }
        
      }
    } else {
      console.log('No data available');
    }
  } catch (error) {
    console.error(error);
  }
});




const downloadData = document.getElementById("downloadData");
downloadData.addEventListener("click", async () => {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));

    if (snapshot.exists()) {
      const teachersData = snapshot.val();
      const classroomData = teachersData[userId].classrooms;
      const data = [];

      for (const key in classroomData) {
        if (classroomData.hasOwnProperty(key)) {
          const element = classroomData[key];
          const studensList = element.students;

          for (const studentKey in studensList) {
            const studentId = studensList[studentKey].studentUID;

            const studentsSnapshot = await get(child(dbRef, 'users'));
            if (studentsSnapshot.exists()) {
              const studentsData = studentsSnapshot.val();
              const studentDetails = studentsData[studentId].studentInfo;
              console.log(studentDetails);

              data.push(studentDetails); // Add studentDetails to the data array
            }
          }
          break;
        }
      }

      // Now, you can call the function to handle the data (e.g., create Excel file)
      excal(data);
    } else {
      console.log('No data available');
    }
  } catch (error) {
    console.error(error);
  }
});


function excal(data){
var dataArray = data.map(obj => Object.values(obj));

// Create a new workbook and worksheet
var workbook = XLSX.utils.book_new();
var worksheet = XLSX.utils.aoa_to_sheet(dataArray);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// Convert the workbook to a binary Excel file
var excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

// Function to download the Excel file
function downloadExcel() {
  var blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, "data.xlsx");
}

downloadExcel();
}




// send massage and show massage
var send = document.getElementById("send");
send.addEventListener('click', ()=>{
  
// take massage value from text box
var message= document.getElementById("w-input-text").textContent;
// Create a new Date object to get the current date and time
const currentTime = new Date();

// Extract the year, month, and day from the Date object
const year = currentTime.getFullYear();
const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
const day = currentTime.getDate().toString().padStart(2, '0');

// Extract the hours, minutes, and seconds from the Date object
const hours = currentTime.getHours().toString().padStart(2, '0');
const minutes = currentTime.getMinutes().toString().padStart(2, '0');
const seconds = currentTime.getSeconds().toString().padStart(2, '0');

// Format the date and time as strings
const formattedDate = `${year}-${month}-${day}`;
const formattedTime = `${hours}:${minutes}`;

// Combine date and time
const time = `${formattedTime}`;
const date = `${formattedDate}`

console.log(date); // Output the current date and time in YYYY-MM-DD HH:mm:ss format

console.log(time);
// deleteAllElementsInDivById('message');

writeNewPost(userId, classCode, time, date, message, teacherName);



// Call the function and pass the id of the div you want to clear

deleteAllElementsInDivById('w-input-text');
// fetchMessage();
// fetchMessage();


});




// post code 

function writeNewPost(userId, classCode, time, date, message, teacherName) {
  const db = getDatabase();

  // A post entry.
  const postData = {
                  userId: userId,
                  name: teacherName,
                  message: message,
                  time: time,
                  date: date,
  };

  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['teachers/' + userId + '/classrooms/'+ classCode + '/posts/' + newPostKey] = postData;
  // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}

// delete massage when click 
function deleteAllElementsInDivById(id) {
  const targetDiv = document.getElementById(id);
  if (targetDiv) {
    targetDiv.innerHTML = ''; // Clear the content inside the targetDiv
  } else {
    console.log(`Element with id "${id}" not found.`);
  }
}
// fetch massage
function fetchMessage(){
  console.log("hello bachoo");

  const dbRef = ref(getDatabase());
  get(child(dbRef, 'teachers')).then((snapshot) => {
    if (snapshot.exists()) {
      const teachersData = snapshot.val();
      var classroomData = teachersData[userId].classrooms;
console.log(classroomData);
      for (const key in classroomData) {
        if (classroomData.hasOwnProperty(classCode)) {
          const element = classroomData[classCode];
          const teacherName = element.teacherName;
          console.log('User Id is:', teacherName);
          const posts = element.posts;
          for(const key in posts){
          if(posts[key].userId === userId){
          var b = document.createElement('div');
          b.classList.add('message-user-right', 'mb-3', 'me-4');

          var uniqueKey = key + '-' + Date.now();
          var teacherName1 = "TeacherName-" + uniqueKey;
          var massage = "Message-" + uniqueKey;
          var time = "Time-" + uniqueKey;
          // var classroomCode = element.classroomCode;
          // console.log(classroomCode);
          b.innerHTML = `
          <div class="message-user-right-img">
            <p class="mt-0 mb-0"><strong id="${teacherName1}">Debiprashad</strong></p>
            <small id="${time}"></small>
            <img
              src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div class="message-user-right-text">
            <strong id="${massage}">Keno ki hoyeche?</strong>
          </div>
        `;

          var targetDiv = document.getElementById('message');
          targetDiv.appendChild(b);

          // Set the value of the elements within the current div
          var teacherNameElement = document.getElementById(teacherName1);
          if (teacherNameElement) {
            teacherNameElement.textContent = teacherName;
          }

          var messageElement = document.getElementById(massage);
          if (messageElement) {
            messageElement.textContent = posts[key].message;
          }

          var timeElement = document.getElementById(time);
          if (timeElement) {
            timeElement.textContent = posts[key].time;
          }
        } else{
          var b = document.createElement('div');
          b.classList.add('message-user-left', 'mb-3', 'ms-4');

          var uniqueKey = key + '-' + Date.now();
          var teacherName1 = "TeacherName-" + uniqueKey;
          var massage = "Message-" + uniqueKey;
          var time = "Time-" + uniqueKey;
          // var classroomCode = element.classroomCode;
          // console.log(classroomCode);
          b.innerHTML = ` <div class="message-user-left-img">
              <img src="images/pp.jpg" alt="">
              <p class="mt-0 mb-0"><strong id="${teacherName1}"></strong></p>
              <small id="${time}"></small>
          </div>
          <div class="message-user-left-text">
              <strong id="${massage}"></strong>
          </div>
  
        `;

          var targetDiv = document.getElementById('message');
          targetDiv.appendChild(b);

          // Set the value of the elements within the current div
          var teacherNameElement = document.getElementById(teacherName1);
          if (teacherNameElement) {
            teacherNameElement.textContent =  posts[key].name;
          }

          var messageElement = document.getElementById(massage);
          if (messageElement) {
            messageElement.textContent = posts[key].message;
          }

          var timeElement = document.getElementById(time);
          if (timeElement) {
            timeElement.textContent = posts[key].time;
          }
        }
       
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

}

function scrollToBottom() {
  const messageContainer = document.getElementById('message');
  messageContainer.scrollTop = messageContainer.scrollHeight;
}







// Observe changes in the message container
const messageContainer = document.getElementById('message');
const observer = new MutationObserver(scrollToBottom);
const observerConfig = { childList: true }; // Observe child node additions
observer.observe(messageContainer, observerConfig);


const db = getDatabase();



const newMsgRef = ref(db, 'teachers/' + userId + '/classrooms/'+ classCode + '/posts/');
// Adding a listener for child added event
onChildAdded(newMsgRef, (snapshot) => {
  // This function will be triggered whenever a new child is added to the 'posts' path
  const newPostData = snapshot.val();
  console.log('New post added:', newPostData);
  deleteAllElementsInDivById('message');
  // Call your fetchMessage() function here to handle the new post data
  fetchMessage(newPostData);
});















// For Card show on click

// const showCardButton = document.getElementById('show-card-button');
// const profileCard = document.getElementById('profile-card');

// let visible = false;

// showCardButton.addEventListener("click", () => {
//   visible = !visible;
//   if (visible) {
//     profileCard.style.display = "block";
//   } else {
//     profileCard.style.display = "none";
//   }
// });

function setFocus () {
  document.getElementById('w-input-text').focus();
}

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


