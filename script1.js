
// Event listener for user click or tap on the body
document.body.addEventListener("click", function() {
    var audio = document.getElementById("background-music");
    audio.muted = false;  // Unmute the audio
    audio.play();  // Play the audio
    document.body.removeEventListener("click", arguments.callee);  // Remove the event listener after the first click
});
