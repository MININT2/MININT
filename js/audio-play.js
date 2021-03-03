var x = document.getElementById("autoplay-audio");

document.body.addEventListener('click', playAudio, true);

function playAudio() {
    x.loop = true;
    x.play();
}

function pauseAudio() {
    x.pause();
}