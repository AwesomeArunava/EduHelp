


var createButton = document.getElementById('create');
createButton.addEventListener('click', function() {
  var classroomName = document.getElementById('classroom-name').value;
  var teacherName = document.getElementById('teacher-name').value;
  var semester = document.getElementById('semester').value;
  var classroomCode = generateClassroomCode();

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
  document.getElementById('classroom-name').value = '';
  document.getElementById('teacher-name').value = '';
  document.getElementById('semester').value = '';
  document.getElementById('classroom-code').value = classroomCode;
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







function loginPage(){
   window.location.href = "login.html";
}

var logOut = document.getElementById("logOut");
logOut.addEventListener("click", handleLogout);


//For Notice SHOWING

// JavaScript code
    // Get the stored message from localStorage
    const message = localStorage.getItem("message");

    // Display the received message
    const receivedMessageElement = document.getElementById("receivedMessage");
    receivedMessageElement.textContent = message;

    // Clear the message from localStorage (optional)
    localStorage.removeItem("message");
