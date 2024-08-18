var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
audio.muted = true;  // Start with audio muted

// Create a button for user interaction
var unmuteButton = document.createElement('button');
unmuteButton.innerText = "Play Sound";
unmuteButton.style.position="absolute";
unmuteButton.style.top="0";
document.body.append(unmuteButton);

// Unmute and play the audio when the button is clicked
unmuteButton.addEventListener('click', function() {
    if (audio.muted) {
        audio.muted = false;  // Unmute the audio
        audio.play();         // Play the audio
    } else {
        audio.muted = true;   // Mute the audio
        audio.pause();        // Pause the audio
    }
});
