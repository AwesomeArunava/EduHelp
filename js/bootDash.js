function loginPage(){
   window.location.href = "login.html";
}

var logOut = document.getElementById("logOut");
logoutButton.addEventListener("click", handleLogout);


// var createButton = document.getElementById('create-button');
// createButton.addEventListener('click', function() {
//   var classroomName = document.getElementById('classroom-name').value;
//   var teacherName = document.getElementById('teacher-name').value;
//   var semester = document.getElementById('semester').value;
//   var classroomCode = generateClassroomCode();

//   // Create the card element
//   var card = document.createElement('div');
//   card.classList.add('card');

//   // Set the card content
//   card.innerHTML = `
//     <h2>Classroom Created</h2>
//     <p><strong>Classroom Name:</strong> ${classroomName}</p>
//     <p><strong>Teacher Name:</strong> ${teacherName}</p>
//     <p><strong>Semester:</strong> ${semester}</p>
//     <p><strong>Classroom Code:</strong> ${classroomCode}</p>
//   `;

//   // Append the card to the document body
//   document.body.appendChild(card);

//   // Reset the input fields
//   document.getElementById('classroom-name').value = '';
//   document.getElementById('teacher-name').value = '';
//   document.getElementById('semester').value = '';
//   document.getElementById('classroom-code').value = classroomCode;
// });

// function generateClassroomCode() {
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   var codeLength = 6;
//   var code = '';

//   for (var i = 0; i < codeLength; i++) {
//     var randomIndex = Math.floor(Math.random() * characters.length);
//     code += characters.charAt(randomIndex);
//   }

//   return code;
// }








