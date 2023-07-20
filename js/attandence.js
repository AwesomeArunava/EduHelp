   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
   import { getDatabase, ref, set, child, get, push, update, onChildAdded } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
   var data = [];
   // Assuming the URL is: https://example.com/page?param1=value1&param2=value2

// Get the current URL
const url = new URL(window.location.href);

// Access the query parameters
const params = new URLSearchParams(url.search);
const classCode = params.get('classCode'); // "value1"
console.log(classCode);
// Use the values as needed


// student list show
// document.addEventListener('DOMContentLoaded', function() {
//   const dbRef = ref(getDatabase());
//   get(child(dbRef, 'teachers')).then((snapshot) => {
//     if (snapshot.exists()) {
//       const teachersData = snapshot.val();
//       var classroomData = teachersData[userId].classrooms;

//       for (const key in classroomData) {
//         if (classroomData.hasOwnProperty(key)) {
//           console.log(classroomData[classCode]);
//           const element = classroomData[classCode];
//           // console.log(element);
//           const studensList = element.students;
//           // console.log('User Id is:', studensList);
//           for(const key in studensList){
            
//             var studentId = studensList[key].studentUID;
//             console.log(studentId);
//             //student name list
//             const dbRef = ref(getDatabase());
//             get(child(dbRef, 'users')).then((snapshot) => {
//               if (snapshot.exists()) {
//                 const studentsData = snapshot.val();
//                 var studentName = studentsData[studentId].studentInfo.student_name;
//                 console.log(studentName);

//                               // Inside the loop
// var b = document.createElement('div');
// // b.classList.add('col-sm-6', 'mt-3');

// // Generate a unique key using `key` and timestamp
// var uniqueKey = key + '-' + Date.now();

// // Generate unique IDs for the elements within each div
// var studentNameId = "StudentName-" + uniqueKey;


// // Set the card content
// b.innerHTML = ` <div class="card">
//   <div class="card-body">
//     <h5 class="card-title" id="${studentNameId}"></h5>
    
//   </div>
// </div>`;

// // Append the card to the target <div>
// targetDiv.appendChild(b);

// // Set the value of the elements within the current div
// document.getElementById(studentNameId).textContent = studentName;

//  }
//             })
            
//         }
//         break;
//         }
        
//       }
//     } else {
//       console.log('No data available');
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// });

document.addEventListener('DOMContentLoaded', async function() {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, 'teachers'));
    fetchMessage();
   
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
              
              b.innerHTML = `<div class="card">
                <div class="card-body">
                  <h5 class="card-title" id="${studentNameId}"></h5>
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



// const downloadData = document.getElementById("downloadData");
// downloadData.addEventListener("click", ()=>{
  
//   // alert("thik ache");
//     const dbRef = ref(getDatabase());
//     get(child(dbRef, 'teachers')).then((snapshot) => {
//       if (snapshot.exists()) {
//         const teachersData = snapshot.val();
//         var classroomData = teachersData[userId].classrooms;
  
//         for (const key in classroomData) {
//           if (classroomData.hasOwnProperty(key)) {
//             console.log(classroomData[classCode]);
//             const element = classroomData[classCode];
//             // console.log(element);
//             const studensList = element.students;
//             // console.log('User Id is:', studensList);
//             for(const key in studensList){
              
//               var studentId = studensList[key].studentUID;
//               // console.log(studentId.studentUID);
//               //student name list
//               const dbRef = ref(getDatabase());
//               get(child(dbRef, 'users')).then((snapshot) => {
//                 if (snapshot.exists()) {
//                   const studentsData = snapshot.val();
//                   var studentName = studentsData[studentId].studentInfo;
//                   console.log(studentName);
//                   var data = studentName;
                
//                   // Create an array of arrays from the object data
//                   var dataArray = data.map(obj => Object.values(obj));
                  
//                   // Create a new workbook and worksheet
//                   var workbook = XLSX.utils.book_new();
//                   var worksheet = XLSX.utils.aoa_to_sheet(dataArray);
                  
//                   // Add the worksheet to the workbook
//                   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                  
//                   // Convert the workbook to a binary Excel file
//                   var excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
                  
//                   // Function to download the Excel file
//                   function downloadExcel() {
//                     var blob = new Blob([excelBuffer], { type: "application/octet-stream" });
//                     saveAs(blob, "data.xlsx");
//                   }
//                   downloadExcel();

  
//                 }
//               })
            
//           }
//           break;
//           }
//         }
//       } else {
//         console.log('No data available');
//       }
//     }).catch((error) => {
//       console.error(error);
//     });

// });

// const downloadData = document.getElementById("downloadData");
// downloadData.addEventListener("click", () => {
//   try{
//   const dbRef = ref(getDatabase());
//   get(child(dbRef, 'teachers')).then((snapshot) => {
//     if (snapshot.exists()) {
//       const teachersData = snapshot.val();
//       var classroomData = teachersData[userId].classrooms;

//       for (const key in classroomData) {
//         if (classroomData.hasOwnProperty(key)) {
//           // console.log(classroomData[classCode]);
//           const element = classroomData[classCode];
//           // console.log(element);
//           const studensList = element.students;
//           // console.log('User Id is:', studensList);
//           for (const key in studensList) {
//             var studentId = studensList[key].studentUID;
//             //student name list
//             const dbRef = ref(getDatabase());
//             get(child(dbRef, 'users')).then((snapshot) => {
//               if (snapshot.exists()) {
//                 const studentsData = snapshot.val();
//                 var studentDeatails = studentsData[studentId].studentInfo;
//                 console.log(studentDeatails);

//                 // Convert studentName object to an array
               
//                 // data.push(studentName);
               

//                 // Create an array of arrays from the object data
              
//               }
//             });
//           }
//           // excal(data);
//           break;
//         }
//       }
//     } else {
//       console.log('No data available');
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// } catch(error){
//   console.log(error);
// }
// });

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



                // Assume you have an object containing data
                // var data = [
                //   { name: "John Doe", age: 25, email: "john@example.com" },
                //   { name: "Jane Smith", age: 30, email: "jane@example.com" }
                // ];
                // var data = studentsData;
                
                // // Create an array of arrays from the object data
                // var dataArray = data.map(obj => Object.values(obj));
                
                // // Create a new workbook and worksheet
                // var workbook = XLSX.utils.book_new();
                // var worksheet = XLSX.utils.aoa_to_sheet(dataArray);
                
                // // Add the worksheet to the workbook
                // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                
                // // Convert the workbook to a binary Excel file
                // var excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
                
                // // Function to download the Excel file
                // function downloadExcel() {
                //   var blob = new Blob([excelBuffer], { type: "application/octet-stream" });
                //   saveAs(blob, "data.xlsx");
                // }
                
                // Attach click event to the download button
                
                // downloadData.addEventListener("click", downloadExcel);

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


writeNewPost(userId, classCode, time, date, message);



// Call the function and pass the id of the div you want to clear
deleteAllElementsInDivById('message');

fetchMessage();



});
// fetch teacher name

// async function teacherName() {
//   try {
//     const dbRef = ref(getDatabase());
//     const snapshot = await get(child(dbRef, 'teachers'));
    
//     if (snapshot.exists()) {
//       const teachersData = snapshot.val();
//       const classroomData = teachersData[userId].classrooms;
      
//       for (const key in classroomData) {
//         if (key === classCode) { // Correct the loop condition to check if key matches classCode
//           console.log(classroomData[key]);
//           const element = classroomData[key];
//           const teacherName = element.teacherName;

//           return teacherName; // Return the teacherName value
//         }
//       }

//       console.log('classCode not found');
//       return null; // Return null or any other default value if classCode is not found
//     } else {
//       console.log('No data available');
//       return null; // Return null or any other default value if no data is available
//     }
//   } catch (error) {
//     console.error(error);
//     return null; // Return null or any other default value in case of an error
//   }
// }



// post code 

function writeNewPost(userId, classCode, time, date, message) {
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

// const dbRef = ref(getDatabase());
// const newMsg = ref(dbRef, 'teachers/' + userId + '/classrooms/'+ classCode + '/posts/');
// onChildAdded(newMsg, ()=>{fetchMessage();});

// import { getDatabase, ref, onChildAdded } from 'firebase/database';

// Assuming you have initialized Firebase and obtained a reference to the database
const db = getDatabase();

// Assuming you have defined 'userId' and 'classCode' variables
// const userId = '...';
// const classCode = '...';

// Create a reference to the 'posts' path under the specific user and classroom
const newMsgRef = ref(db, 'teachers/' + userId + '/classrooms/' + classCode + '/posts/');

// Adding a listener for child added event
onChildAdded(newMsgRef, (snapshot) => {
  // This function will be triggered whenever a new child is added to the 'posts' path
  const newPostData = snapshot.val();
  console.log('New post added:', newPostData);

  // Call your fetchMessage() function here to handle the new post data
  fetchMessage(newPostData);
});



// Call scrollToBottom() after adding new content to keep the scroll bar at the bottom


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

function setFocus () {
  document.getElementById('w-input-text').focus();
}





