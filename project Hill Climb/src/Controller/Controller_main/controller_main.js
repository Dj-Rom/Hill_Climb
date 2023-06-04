import { kontrole } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";


document.addEventListener("keydown", () => {
    event.preventDefault();
    if (event.key === "ArrowRight") {
        kontrole.ArrowRight = 1;
    }
    if (event.key === "ArrowLeft") {
        kontrole.ArrowLeft = 1;
    }
    if (event.key === "ArrowUp") {
        kontrole.ArrowUp = 1;
    }
    if (event.key === "ArrowDown") {
        kontrole.ArrowDown = 1;
    }
});
document.addEventListener("keyup", () => {
    event.preventDefault();
    if (event.key === "ArrowRight") {
        kontrole.ArrowRight = 0;
    }
    if (event.key === "ArrowLeft") {
        kontrole.ArrowLeft = 0;
    }
    if (event.key === "ArrowUp") {
        kontrole.ArrowUp = 0;
    }
    if (event.key === "ArrowDown") {
        kontrole.ArrowDown = 0;
    }
});

let timer = null;
// На первое срабатывание реагируем всегда
let oldAngle = 1000;
window.addEventListener('deviceorientation', function(event) {
     event.preventDefault();
  let angle = event.beta;
  let delta = Math.abs(angle - oldAngle);
  oldAngle = angle;
  if (delta < 2)  // Если уголо наклона изменился не сильно
    return;  // выходим
  if (timer)
    clearTimeout(timer);
  timer = setTimeout(function() {
    timer = null;
    if (angle >10) {
       kontrole.ArrowRight = 1;
        kontrole.ArrowLeft = 0
    } else if (angle < -10) {
        kontrole.ArrowRight = 0;
      kontrole.ArrowLeft = 1;
    }else if (angle < 10 && angle > -10 ){
        kontrole.ArrowRight = 0;
      kontrole.ArrowLeft = 0;
  }
      else if (angle > 10 && angle < -10 ){
        kontrole.ArrowRight = 0;
      kontrole.ArrowLeft = 0;}}, 16);
});


const imgGaz = document.getElementById("imgGaz");

imgGaz.addEventListener("touchstart", () => {
    event.preventDefault()
        
       return kontrole.ArrowUp = 1
    }

);
imgGaz.addEventListener("touchend",
    () => {event.preventDefault()
        kontrole.ArrowUp = 0;
    }
);

const imgbr = document.getElementById("imgbr");

imgbr.addEventListener("touchstart", () => {event.preventDefault()
        
       return kontrole.ArrowDown = 1
    }

);
imgbr.addEventListener("touchend",
    () => {event.preventDefault()
        kontrole.ArrowDown = 0;
    }
);


window.navigator.vibrate(200)






