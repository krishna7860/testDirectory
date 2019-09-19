// Fetching HTML Elements
let longitude = document.getElementById("geolocation__location--longitude");
let latitude = document.getElementById("geolocation__location--latitude");
let status = document.getElementById("geolocation__status");
let date = document.getElementById("date");
// Getting Location
function getLocation() {
  if (navigator.geolocation) {
    status.innerText = "Locating...";
    navigator.geolocation.getCurrentPosition(showPostion, showError);
  } else {
    status.innerHTML = "Geolocation is not supported by your browser";
  }
}

// Showing Location
function showPostion(position) {
  const coordLat = position.coords.latitude;
  const coordLong = position.coords.longitude;
  status.innerHTML = "Done..";
  latitude.innerHTML = "Lattitude : " + coordLat;
  longitude.innerHTML = "Longitude : " + coordLong;
}

// Location Error
function showError() {
  status.innerHTML = "Unable to Retrieve your location";
}

// Getting & Printing Date
var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
date.innerHTML = "Time : " + time;
