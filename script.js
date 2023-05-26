// List of available video files
const videos = [
  'video1.mp4',
  'video2.mp4',
];

// Choose a random video from the list
const randomIndex = Math.floor(Math.random() * videos.length);
const chosenVideo = videos[randomIndex];

// Set the video source to the chosen video
const videoSource = document.getElementById('video-source');
videoSource.setAttribute('src', chosenVideo);

// Reload the video
const video = document.getElementById('background-video');
video.load();

var myLink = document.getElementById("my-link");

myLink.addEventListener("click", function() {
  window.location.href = "https://blablabla.github.io/Random cool thingy";
});

// This function will get the latest data from the server and update the page.
function getLatestData() {
  // Make a request to the server.
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/latest-data');
  xhr.onload = function() {
    // If the request was successful, update the page with the new data.
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      // Update the page with the new data.
      document.querySelector('#content').innerHTML = data;
    }
  };
  xhr.send();
}

// This code will add a button to the page that will call the getLatestData function.
document.querySelector('#refresh-button').addEventListener('click', getLatestData);
