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