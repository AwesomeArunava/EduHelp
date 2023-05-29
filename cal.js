const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

function renderCalendar() {
	const monthName = document.getElementById("month-name");
	const days = document.getElementById("days");
	
	const lastDay = new Date(year, month + 1, 0).getDate();
	const firstDayIndex = new Date(year, month, 1).getDay();
	const lastDayIndex = new Date(year, month, lastDay).getDay();
	const nextDays = 7 - lastDayIndex - 1;
	
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	monthName.innerHTML = `${monthNames[month]} ${year}`;
	
	let daysHTML = "";
	
	for(let i = firstDayIndex; i > 0; i--) {
		daysHTML += `<li class="empty-day"></li>`;
	}
	
	for(let i = 1; i <= lastDay; i++) {
		daysHTML += `<li>${i}</li>`;
	}
	
	for(let i = 1; i <= nextDays; i++) {
		daysHTML += `<li class="empty</li>`;
	}
}
