import { kontrole } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
let data = JSON.parse(localStorage["HillClimb"])
console.log(data)
if(!data|| data === ""){
    data.forwardKey = 'ArrowUp',
    data.backKey = 'ArrowDown',
    data.B_forwardKe ='ArrowRight',
    data.B_BackKey = 'ArrowLeft'
    
}

document.addEventListener("keydown", () => {
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
document.addEventListener("keyup", () => {
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
    event.preventDefault();
    let angle = event.beta;
    let delta = Math.abs(angle - oldAngle);
    oldAngle = angle;
    if (delta < 2)  // Если уголо наклона изменился не сильно
        return;  // выходим
    if (timer)
        clearTimeout(timer);
    timer = setTimeout(function () {
        timer = null;
        if (angle > 10) {
            kontrole.ArrowRight = 1;
            kontrole.ArrowLeft = 0
        } else if (angle < -10) {
            kontrole.ArrowRight = 0;
            kontrole.ArrowLeft = 1;
        } else if (angle < 10 && angle > -10) {
            kontrole.ArrowRight = 0;
            kontrole.ArrowLeft = 0;
        }
        else if (angle > 10 && angle < -10) {
            kontrole.ArrowRight = 0;
            kontrole.ArrowLeft = 0;
        }
    }, 16);
});


const imgGaz = document.getElementById("imgGaz");

imgGaz.addEventListener("touchstart", () => {
    event.preventDefault()
    window.navigator.vibrate(200)
    return kontrole.ArrowUp = 1
}, false
);
imgGaz.addEventListener("touchend",
    () => {
        event.preventDefault()
        kontrole.ArrowUp = 0;
    }, false
);
imgGaz.addEventListener("click", () => {
    event.preventDefault()
    window.navigator.vibrate(200)
    return kontrole.ArrowUp = 1
}, false

);

const imgbr = document.getElementById("imgbr");

imgbr.addEventListener("touchstart", () => {
    event.preventDefault()
    window.navigator.vibrate(200)
    return kontrole.ArrowDown = 1
}, false

);
imgbr.addEventListener("touchend",
    () => {
        event.preventDefault()
        kontrole.ArrowDown = 0;
    }, false
);

imgbr.addEventListener("click", () => {
    event.preventDefault()
    window.navigator.vibrate(200)
    return kontrole.ArrowDown = 1
}, false
);

imgGaz.addEventListener("mouseDown", () => {
    event.preventDefault()
    window.navigator.vibrate(200)
    return kontrole.ArrowUp = 1
}, false
);
imgGaz.addEventListener("MouseUp",
    () => {
        event.preventDefault()
        kontrole.ArrowUp = 0;
    }, false
);




imgbr.addEventListener("mouseDown", () => {
    event.preventDefault()
    window.navigator.vibrate(200)
    return kontrole.ArrowDown = 1
}, false

);
imgbr.addEventListener("mouseUp",
    () => {
        event.preventDefault()
        kontrole.ArrowDown = 0;
    }, false
)






