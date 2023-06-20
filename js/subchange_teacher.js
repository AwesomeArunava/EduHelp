// Sample data for demonstration
var requestsData = [
    {
        name: "Arunava",
        regNo: "12345",
        presentSubject: "Mathematics",
        newSubject: "Physics",
        status: "Pending"
    },
    {
        name: "Rahul",
        regNo: "8116158818",
        presentSubject: "Chemistry",
        newSubject: "Biology",
        status: "Pending"
    }
];

// Display the requests table
var requestsTable = document.getElementById("requestsTable");
requestsData.forEach(function(request) {
    var row = requestsTable.insertRow();
    row.insertCell().textContent = request.name;
    row.insertCell().textContent = request.regNo;
    row.insertCell().textContent = request.presentSubject;
    row.insertCell().textContent = request.newSubject;
    var statusCell = row.insertCell();
    statusCell.textContent = request.status;
    statusCell.classList.add("status-" + request.status.toLowerCase());
    var actionCell = row.insertCell();
    var approveButton = document.createElement("button");
    approveButton.textContent = "Approve";
    approveButton.addEventListener("click", function() {
        updateRequestStatus(request, "Approved");
    });
    actionCell.appendChild(approveButton);
    var rejectButton = document.createElement("button");
    rejectButton.textContent = "Reject";
    rejectButton.addEventListener("click", function() {
        updateRequestStatus(request, "Rejected");
    });
    actionCell.appendChild(rejectButton);
});

// Update the request status and update the table
function updateRequestStatus(request, newStatus) {
    request.status = newStatus;
    var statusCell = document.querySelector("#requestsTable tr:nth-child(" + (requestsData.indexOf(request) + 2) + ") td:nth-child(5)");
    statusCell.textContent = newStatus;
    statusCell.className = "";
    statusCell.classList.add("status-" + newStatus.toLowerCase());
}