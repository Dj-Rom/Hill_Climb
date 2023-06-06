window.addEventListener("load",()=>{
const welcom = document.createElement("div")
welcom.id = "welcom";
welcom.innerText = "Student project Hill Climb"
welcom.style.opacity = 0.98
document.body.append(welcom)
let contener = document.querySelector(".contener");
 let welcomGet = document.querySelector('#welcom')
 let hw = 100
 welcomGet.style.height = hw+"%"
 welcomGet.style.transition = "transition: width 4s, height 4s, transform 15s;"
 contener.style.transition = "transition: width 4s, height 2s, transform 15s;"
 contener.style.opacity = .01
let timer = setInterval(()=>{
  contener.style.opacity *=1.07
  welcomGet.style.opacity -=0.00999999;
if(welcomGet.style.opacity <= 0.00 && contener.style.opacity > 0.90 ){playAudio(aud); welcomGet.style.display = "none"; clearInterval(timer); 
}
},20)
const soundAudio = document.createElement("audio");
soundAudio.id = "audioT";
soundAudio.loop = "loop";
document.body.append(soundAudio);
let aud = document.getElementById("audioT").muted;
aud = new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/music/menu.mp3");
function playAudio(elem) {
  elem.play()
}
function pauseAudio() {
  aud.pause();
}
const on = document.getElementById("soundOn");
const off = document.getElementById("soundOff");
on.style.display = "block";
off.style.display = "none";
function soundControl() {
  requestAnimationFrame(soundControl);
  if (off.style.display === "block") {
    playAudio(aud);
  }
  if (on.style.display === "block") {
    pauseAudio();
  }
}
soundControl();
const bodyM = document.querySelector('body')
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
openFullscreen(bodyM)

})
