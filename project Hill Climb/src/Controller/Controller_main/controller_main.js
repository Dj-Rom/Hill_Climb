import { kontrole } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
import { resultGetUserResult } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
import { controleUserClosedPageBoolean } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";

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


document.addEventListener("keydown", eo => {
  eo = eo || window.event;
  eo.preventDefault();
  if (eo.key === data.B_forwardKey) {
    kontrole.ArrowRight = 1;
  }
  if (eo.key === data.B_BackKey) {
    kontrole.ArrowLeft = 1;
  }
  if (eo.key === data.forwardKey) {
    kontrole.ArrowUp = 1;
  }
  if (eo.key === data.backKey) {
    kontrole.ArrowDown = 1;
  }
});
document.addEventListener("keyup", eo => {
  eo = eo || window.event
  eo.preventDefault();
  if (eo.key === data.B_forwardKey) {
    kontrole.ArrowRight = 0;
  }
  if (eo.key === data.B_BackKey) {
    kontrole.ArrowLeft = 0;
  }
  if (eo.key === data.forwardKey) {
    kontrole.ArrowUp = 0;
  }
  if (eo.key === data.backKey) {
    kontrole.ArrowDown = 0;
  }
});
let timer = null;
// На первое срабатывание реагируем всегда
let oldAngle = 1000;
window.addEventListener('deviceorientation', function (eo) {
  eo = eo || window.event;
  eo.preventDefault();
  let angle = eo.beta;
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
  }, 200);
});
document.addEventListener('touchmove', function() { e.preventDefault(); }, { passive:false });
const imgGaz = document.querySelector("#imgGaz");
if (imgGaz !== null) {

imgGaz.addEventListener("touchstart", eo => {
  eo = eo || window.event;
  eo.preventDefault();
  window.navigator.vibrate(200);
  return kontrole.ArrowUp = 1;
}, {passive: false});
imgGaz.addEventListener("touchend", eo => {
  eo = eo || window.event;
  eo.preventDefault();
  kontrole.ArrowUp = 0;
}, {passive: false});

const imgbr = document.getElementById("imgbr");
imgbr.addEventListener("touchstart", eo => {
  eo = eo || window.event;
  eo.preventDefault();
  window.navigator.vibrate(200);
  return kontrole.ArrowDown = 1;
}, {passive: false });
imgbr.addEventListener("touchend", eo => {
  eo = eo || window.event;
  eo.preventDefault();
  kontrole.ArrowDown = 0;
}, {passive: false});


}



// the user wants to close the page

const link_was_clicked = false;
document.addEventListener("click", function(e) {
  console.log(controleUserClosedPageBoolean);
  if(controleUserClosedPageBoolean) {
   if (e.target.nodeName.toLowerCase() === 'a') {
      link_was_clicked = true;
   }
}}, true);

window.onbeforeunload = function(e) {
    if(link_was_clicked) {
        return;
    }
    return confirm('Are you sure?');
}
