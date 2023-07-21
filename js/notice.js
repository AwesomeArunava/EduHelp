   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
   import { getDatabase, ref, set, child, get, push, update, onChildAdded } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
   import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
   import { getStorage, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
   
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
  //  firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

  //  const storage = getStorage(app);
   // fetch teacher userId from localhost
   var userId = localStorage.getItem('userId');
   function deleteAllElementsInDivById(id) {
    const targetDiv1 = document.getElementById(id);
    if (targetDiv1) {
      targetDiv1.innerHTML = ''; // Clear the content inside the targetDiv
    } else {
      console.log(`Element with id "${id}" not found.`);
    }
  }
// capture data from dom

// var title = document.getElementById("title");
// var description = document.getElementById("description");
// var imgFile = document.getElementById("fromFile");

// collect all students userId list 
// const studentList1 = new Array(); // An empty array


// function studentList(){

  
//     const dbRef = ref(getDatabase());
//     get(child(dbRef, 'teachers')).then((snapshot) => {
//       if (snapshot.exists()) {
//         const teachersData = snapshot.val();
//         var classroomData = teachersData[userId].classrooms;
// //   console.log(classroomData);
//         for (const key in classroomData) {
        
//                const classCodes = classroomData[key];
//                 for(const key in classCodes){
//                     const a = classCodes.students;
//                         for(const key in a){
//                             const studentUID = a[key].studentUID;
//                             // console.log(studentUID);
//                             studentList1.push(studentUID);
//                         }
//                     break;
//                 }
         
//         }
//       } else {
//         console.log('No data available');
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
  
//   }

//   studentList();
  // Use a Set to remove duplicates
// Function to remove duplicate values from an array
// Function to filter out duplicate string values from an array
// console.log(studentList1[2]);

// for (let i = 0; i < studentList1.length; i++) {
//     console.log(studentList1[i]);
//   }

async function studentList() {
    const dbRef = ref(getDatabase());
    try {
      const snapshot = await get(child(dbRef, 'teachers'));
      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        var classroomData = teachersData[userId].classrooms;
        const studentList1 = [];
  
        for (const key in classroomData) {
          const classCodes = classroomData[key];
          for (const key in classCodes) {
            const a = classCodes.students;
            for (const key in a) {
              const studentUID = a[key].studentUID;
              studentList1.push(studentUID);
            }
            break;
          }
        }
        
        return studentList1; // Return the array after populating it with data
      } else {
        console.log('No data available');
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  // var notice_submit = document.getElementById("notice_submit");
  // notice_submit.addEventListener('click', ()=>{
  //   studentList().then((studentList1) => {
  //     console.log(studentList1); // Access the complete array here
  //     console.log(studentList1[0]); // Access a single index value here
  
  //     var title = document.getElementById("title").value;
  //     var description = document.getElementById("description").value;
  //     var imgFile = document.getElementById("fromFile").value;
  
  //     // Create a new Date object to get the current date and time
  // const currentTime = new Date();
  
  // // Extract the year, month, and day from the Date object
  // const year = currentTime.getFullYear();
  // const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
  // const day = currentTime.getDate().toString().padStart(2, '0');
  
  // // Extract the hours, minutes, and seconds from the Date object
  // const hours = currentTime.getHours().toString().padStart(2, '0');
  // const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  // const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  
  // // Format the date and time as strings
  // const formattedDate = `${year}-${month}-${day}`;
  // const formattedTime = `${hours}:${minutes}`;
  
  // // Combine date and time
  // const time = `${formattedTime}`;
  // const date = `${formattedDate}`
  //     for (let i = 0; i < studentList1.length; i++) {
  //       // Code to execute for each element in the array
  //       const studentUserId = studentList1[i];
  //       function writeNewPost(studentUserId, title, description, imgFile, time, date);
  
  //   }
  //   });
  // })
  const notice_submit1 = document.getElementById("notice_submit");
notice_submit1.addEventListener("click", () => {
console.log("hello");
// uploadImage();
    studentList().then((studentList1) => {
        console.log(studentList1); // Access the complete array here
        console.log(studentList1[0]); // Access a single index value here

        var title = document.getElementById("floatingTextareaDisabled").value;
        var description = document.getElementById("floatingTextarea2Disabled").value;
        // var imgInput = document.getElementById("fromFile");
        
        // Get the selected image file
        // var imgFile = imgInput;
       

        // Create a new Date object to get the current date and time
        const currentTime = new Date();

        // Extract the year, month, and day from the Date object
        const year = currentTime.getFullYear();
        const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
        const day = currentTime.getDate().toString().padStart(2, '0');

        // Extract the hours and minutes from the Date object
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');

        // Format the date and time as strings
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = `${hours}:${minutes}`;

        // Combine date and time
        const time = `${formattedTime}`;
        const date = `${formattedDate}`;

        for (let i = 0; i < studentList1.length; i++) {
            // Code to execute for each element in the array
            const studentUserId = studentList1[i];
            writeNewPost(studentUserId, title, description, time, date);
        }
        // uploadImage();
        deleteAllElementsInDivById('floatingTextareaDisabled');
    });
    
});
//   // To use the function and access the studentList1 array:
//   studentList().then((studentList1) => {
//     console.log(studentList1); // Access the complete array here
//     console.log(studentList1[0]); // Access a single index value here

//     var title = document.getElementById("title").value;
//     var description = document.getElementById("description").value;
//     var imgFile = document.getElementById("fromFile").value;

//     // Create a new Date object to get the current date and time
// const currentTime = new Date();

// // Extract the year, month, and day from the Date object
// const year = currentTime.getFullYear();
// const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
// const day = currentTime.getDate().toString().padStart(2, '0');

// // Extract the hours, minutes, and seconds from the Date object
// const hours = currentTime.getHours().toString().padStart(2, '0');
// const minutes = currentTime.getMinutes().toString().padStart(2, '0');
// const seconds = currentTime.getSeconds().toString().padStart(2, '0');

// // Format the date and time as strings
// const formattedDate = `${year}-${month}-${day}`;
// const formattedTime = `${hours}:${minutes}`;

// // Combine date and time
// const time = `${formattedTime}`;
// const date = `${formattedDate}`
//     for (let i = 0; i < studentList1.length; i++) {
//       // Code to execute for each element in the array
//       const studentUserId = studentList1[i];
//       function writeNewPost(studentUserId, title, description, imgFile, time, date);

//   }
//   });
 
//     function writeNewPost(studenntUserId, title, description, imgFile, time, date);
// Write Notice

function writeNewPost(studenntUserId, title, description, time, date) {
    const db = getDatabase();
  
    // A post entry.
    const postData = {
                  
                    title: title,
                    description: description,
                    // imgFile: imgFile,
                    time: time,
                    date: date,
    };
  
    const newPostKey = push(child(ref(db), 'posts')).key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['users/' + studenntUserId + '/notice/' + newPostKey] = postData;
    // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return update(ref(db), updates);
  }



  // function uploadImage(){
  //   console.log("image");
    
    // var imgInput = document.getElementById("fromFile");
        
        // Get the selected image file
        // var imgFile = imgInput.target.files[0];
//         var imgFile = imgInput;
//  const storage = getStorage();
//   const storageRef = ref(storage, 'images/');
//   const uploadTask = storageRef.put(imgFile);
// // 'file' comes from the Blob or File API
// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on('state_changed',
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect error.serverResponse
//         break;
//     }
//   }, 
//   () => {
//     // Upload completed successfully, now we can get the download URL
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );

// };
  

