// console.log("I AM LOADED!!");

function updateTimer(){
	// subtract end date from now()
	var now = new Date();
	var timeRemaining = endDate.getTime() - now.getTime();
	// console.log(timeRemaining)
	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

	// console.log(seconds);
	// console.log(weeks);
	document.getElementsByClassName('weeks')[0].innerHTML = weeks;
	document.getElementsByClassName('days')[0].innerHTML = days;
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;

}

var endDate = new Date("January 10, 2018");
// console.log(endDate);
// setInterval will run the first arg (function) every 1000 milliseconds/1 second
setInterval(function(){
	// console.log("Tick");
	// Update the HTML so the right numbers are showing.
	updateTimer();
},1000)
