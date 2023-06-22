var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
  var d = new Date();
	var t = d.toLocaleTimeString([], {
		hour: '2-digit', minute:'2-digit'
	});
	
  var date = d.toLocaleDateString([], {
		day: '2-digit'
	});
  
  var weekday = new Array(7);
  weekday[0] = "Sunday,";
  weekday[1] = "Monday,";
  weekday[2] = "Tuesday,";
  weekday[3] = "Wednesday,";
  weekday[4] = "Thursday,";
  weekday[5] = "Friday,";
  weekday[6] = "Saturday,";

  var day = weekday[d.getDay()];
	
	var month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
	month[11] = "December";

  var month = month[d.getDay()];
  
  document.getElementById("date").innerHTML = day + " " + month + " " + date.replace(/^0(?:0:0?)?/, '');
	document.getElementById("time").innerHTML = t;
};



