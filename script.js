// javascript countdown timer
var show = document.getElementById("show");

var cDate, eDate, second, minute, hour, day, ti;
function start() {
  var iDate = event.target.valueAsDate;
  //   show.innerHTML = iDate;
  cDate = new Date();
  eDate = new Date(iDate);

  second = (eDate - cDate) / 1000;
  outputupdate();

  t = window.setTimeout(update, 1000);
}

function update() {
  cDate = new Date();
  second = (eDate - cDate) / 1000;
  outputupdate();
  t = window.setTimeout(update, 1000);
}

// output update
function outputupdate() {
  cDate = new Date();
  var duration = eDate - cDate;
  second = Math.floor((duration % (1000 * 60)) / 1000);

  second = second < 10 ? "0" + second : second;

  minute = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  minute = minute < 10 ? "0" + minute : minute;

  hour = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  day = Math.floor(duration / (1000 * 60 * 60 * 24));
  show.innerHTML = day + " : " + hour + " : " + minute + " : " + second;
}
