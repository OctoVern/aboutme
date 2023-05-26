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
