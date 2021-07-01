// TIME VALUES
var hour = 0;
var min = 0;
var sec = 0;

// Displayed VALUES
var displayHour = 0;
var displayMin = 0;
var displaySec = 0;

// TO START TIMER
var interval = null;
var status = "started";

function stopwatch () {
  sec++;

  if (sec % 60 == 0 ) {
    sec = 0;
    min++;
    if (min % 60 == 0) {
      min = 0;
      hour++;
    }
  }
// only one digit
if (sec < 10) {
  displaySec = "0" + sec;
}
else {
  displaySec = sec;
}

if (min < 10) {
  displayMin = "0" + min;
}
else {
  displayMin = min;
}

if (hour < 10) {
  displayHour = "0" + hour;
}
else {
  displayHour = hour;
}
  document.getElementById("stopwatch").innerHTML = displayHour + ":" + displayMin +":" + displaySec;
}

//BUTTONS
 function startStop () {

if (status =="stopped") {
  interval = window.setInterval(stopwatch, 1000);
  document.getElementById("startStopButton").innerHTML = "stop";
  status ="started";


}

else {
  window.clearInterval(interval);
  document.getElementById("startStopButton").innerHTML = "start";
  status ="stopped";
}

}

startStop()

function reset () {
  window.clearInterval(interval);
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById('stopwatch').innerHTML = "00:00:00";


}
