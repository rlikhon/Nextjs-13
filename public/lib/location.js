
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function success(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    console.log("Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude);
  }
  
  function error() {
    alert("Sorry, no position available.");
  }
  const x = document.getElementById("demo");
  getLocation();