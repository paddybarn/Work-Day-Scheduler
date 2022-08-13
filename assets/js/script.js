// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var currentTime = $("#time-display");



function displayTime() {
    var rightNow = moment().format('dddd MMM Do, YYYY [at] hh:mm:ss a');
    currentTime.text(rightNow);
}


var timeArray = [09, 10, 11, 12, 13, 14, 15, 16, 17]

for (let i = 0; i < timeArray.length; i++) {
    var time = timeArray[i]
    var curTime = new Date();
    curTime = parseInt(curTime.getHours());

    if (curTime > time) {
        document.getElementsByClassName(".textBox").style.backgroundColor = "grey";
    } if (curTime === time) {
        document.getElementById("textBox").style.backgroundColor = "red";
    } else {document.getElementById("textBox").style.backgroundColor = "green";}
}




displayTime()

setInterval(displayTime, 1000);

