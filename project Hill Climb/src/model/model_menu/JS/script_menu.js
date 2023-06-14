import "core-js/modules/es.json.stringify.js";
window.addEventListener("load", function () {
  var passForDB = Math.random();
  localStorage["PassForDB"] = localStorage["PassForDB"] ? localStorage["PassForDB"] : localStorage["PassForDB"] = JSON.stringify(passForDB);
  var welcom = document.createElement("div");
  welcom.id = "welcom";
  welcom.innerText = "Student project Hill Climb";
  welcom.style.opacity = 0.98;
  document.body.append(welcom);
  var contener = document.querySelector(".contener");
  var welcomGet = document.querySelector('#welcom');
  var hw = 100;
  welcomGet.style.height = hw + "%";
  welcomGet.style.transition = "transition: width 4s, height 4s, transform 15s;";
  contener.style.transition = "transition: width 4s, height 2s, transform 15s;";
  contener.style.opacity = .01;
  var timer = setInterval(function () {
    contener.style.opacity *= 1.07;
    welcomGet.style.opacity -= 0.00999999;
    if (welcomGet.style.opacity <= 0.00 && contener.style.opacity > 0.90) {
      welcomGet.style.display = "none";
      clearInterval(timer);
    }
  }, 20);
  var soundAudio = document.createElement("audio");
  soundAudio.id = "audioT";
  soundAudio.loop = "loop";
  document.body.append(soundAudio);
  var aud = document.getElementById("audioT").muted;
  aud = new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/music/menu.mp3");
  var audioControlePower = {
    on: function playAudio(elem) {
      elem.play();
    },
    off: function pauseAudio() {
      aud.pause();
    }
  };
  var on = document.getElementById("soundOn");
  var off = document.getElementById("soundOff");
  on.style.display = "block";
  off.style.display = "none";
  function soundControl() {
    requestAnimationFrame(soundControl);
    if (off.style.display === "block") {
      audioControlePower.on(aud);
    }
    if (on.style.display === "block") {
      audioControlePower.off();
    }
  }
  soundControl();
});