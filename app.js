document.getElementById("heading").innerHTML =
  localStorage["title"] || ""; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || ""; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);

function nohed() {
    var area = document.getElementById("heading");
    while (area.firstChild) area.removeChild(area.firstChild);
  }
  function noco() {
    var area = document.getElementById("content");
    while (area.firstChild) area.removeChild(area.firstChild);
  }