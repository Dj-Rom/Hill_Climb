import { kontrole } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
import { resultGetUserResult } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";

export let settingGame1 = {
    forwardKey: 'ArrowUp',
    backKey: 'ArrowDown',
    B_forwardKey: 'ArrowRight',
    B_BackKey: 'ArrowLeft'
  };
  let dataS = JSON.stringify(settingGame1);
  localStorage["HillClimb"] = localStorage["HillClimb"] ? localStorage["HillClimb"] : localStorage["HillClimb"] = dataS;
  let dataQ = localStorage["HillClimb"];
    let data = JSON.parse(dataQ);
 

    let btnGameinMenu = document.getElementById("btnGameinMenu")
    btnGameinMenu.addEventListener("click", ()=>{
      localStorage["saveGamePos"] = resultGetUserResult ;
    
      location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html"
    })


document.addEventListener("keydown", event => {
  event = event || window.event;
  event.preventDefault();
  if (event.key === data.B_forwardKey) {
    kontrole.ArrowRight = 1;
  }
  if (event.key === data.B_BackKey) {
    kontrole.ArrowLeft = 1;
  }
  if (event.key === data.forwardKey) {
    kontrole.ArrowUp = 1;
  }
  if (event.key === data.backKey) {
    kontrole.ArrowDown = 1;
  }
});
document.addEventListener("keyup", event => {
  event = event || window.event;
  event.preventDefault();
  if (event.key === data.B_forwardKey) {
    kontrole.ArrowRight = 0;
  }
  if (event.key === data.B_BackKey) {
    kontrole.ArrowLeft = 0;
  }
  if (event.key === data.forwardKey) {
    kontrole.ArrowUp = 0;
  }
  if (event.key === data.backKey) {
    kontrole.ArrowDown = 0;
  }
});
let timer = null;
// На первое срабатывание реагируем всегда
let oldAngle = 1000;
window.addEventListener('deviceorientation', function (event) {
  event = event || window.event;
  event.preventDefault();
  let angle = event.beta;
  let delta = Math.abs(angle - oldAngle);
  oldAngle = angle;
  if (delta < 2)
    // Если уголо наклона изменился не сильно
    return; // выходим
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
    timer = null;
    if (angle > 10) {
      kontrole.ArrowRight = 1;
      kontrole.ArrowLeft = 0;
    } else if (angle < -10) {
      kontrole.ArrowRight = 0;
      kontrole.ArrowLeft = 1;
    } else if (angle < 10 && angle > -10) {
      kontrole.ArrowRight = 0;
      kontrole.ArrowLeft = 0;
    } else if (angle > 10 && angle < -10) {
      kontrole.ArrowRight = 0;
      kontrole.ArrowLeft = 0;
    }
  }, 16);
});
const imgGaz = document.querySelector("#imgGaz");
if (imgGaz === null) {

imgGaz.addEventListener("touchstart", event => {
  event = event || window.event;
  event.preventDefault();
  window.navigator.vibrate(200);
  return kontrole.ArrowUp = 1;
}, false);
imgGaz.addEventListener("touchend", event => {
  event = event || window.event;
  event.preventDefault();
  kontrole.ArrowUp = 0;
}, false);
imgGaz.addEventListener("click", event => {
  event = event || window.event;
  event.preventDefault();
  window.navigator.vibrate(200);
  return kontrole.ArrowUp = 1;
}, false);
const imgbr = document.getElementById("imgbr");
imgbr.addEventListener("touchstart", event => {
  event = event || window.event;
  event.preventDefault();
  window.navigator.vibrate(200);
  return kontrole.ArrowDown = 1;
}, false);
imgbr.addEventListener("touchend", event => {
  event = event || window.event;
  event.preventDefault();
  kontrole.ArrowDown = 0;
}, false);
imgbr.addEventListener("click", event => {
  event = event || window.event;
  event.preventDefault();
  window.navigator.vibrate(200);
  return kontrole.ArrowDown = 1;
}, false);

}