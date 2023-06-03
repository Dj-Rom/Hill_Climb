const soundAudio = document.createElement("audio");
soundAudio.id = "audioT";
soundAudio.loop = "loop";
soundAudio.soundAudio = 'soundAudio'
soundAudio.controls = 'controls'
document.body.append(soundAudio);

let aud = document.getElementById("audioT").muted;
aud = new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/music/menu.mp3");

function playAudio() {
  aud.play();
}

function pauseAudio() {
  aud.pause();
}

const on = document.getElementById("soundOn");
const off = document.getElementById("soundOff");
on.style.display = "none";
off.style.display = "block";

function soundControl() {
  requestAnimationFrame(soundControl);

  if (off.style.display === "block") {
    playAudio();
  }
  if (on.style.display === "block") {
    pauseAudio();
  }
}
soundControl();
