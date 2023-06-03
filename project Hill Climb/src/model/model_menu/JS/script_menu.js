const soundAudio = document.createElement('audio');
soundAudio.id = "audioT"
soundAudio.loop = "loop"
soundAudio.autoplay = "autoplay"
document.body.append(soundAudio)
let audioT = document.getElementById("audioT"); 
audioT = new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/music/menu.mp3")




function playAudio(elem) { 
  elem.play(); 
} 

function pauseAudio(elem) { 
  elem.pause(); 
} 
playAudio(audioT)
