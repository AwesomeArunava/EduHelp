  // for subject change

  document.getElementById("subjectChangeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById("name").value;
    var regNo = document.getElementById("regNo").value;
    var presentSubject = document.getElementById("presentSubject").value;
    var newSubject = document.getElementById("newSubject").value;

    // Save the form data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("regNo", regNo);
    localStorage.setItem("presentSubject", presentSubject);
    localStorage.setItem("newSubject", newSubject);

    // Redirect to status.html
    window.location.href = "status.html";
});