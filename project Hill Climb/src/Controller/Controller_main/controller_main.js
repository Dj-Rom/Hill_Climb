import { kontrole } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";


console.log(kontrole);
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

// window.addEventListener("deviceorientation", function (event) {
//     if (event.beta > "3") {
//         kontrole.ArrowRight = 1;
//     } else if (event.beta < "-3") {
//         kontrole.ArrowLeft = 1;
//     }
// });

const imgGaz = document.getElementById("imgGaz");

imgGaz.addEventListener("touchstart", () => {
        
       return kontrole.ArrowUp = 1
    }

);
imgGaz.addEventListener("touchend",
    () => {
        kontrole.ArrowUp = 0;
    }
);

const imgbr = document.getElementById("imgbr");

imgbr.addEventListener("touchstart", () => {
        
       return kontrole.ArrowDown = 1
    }

);
imgbr.addEventListener("touchend",
    () => {
        kontrole.ArrowDown = 0;
    }
);


window.navigator.vibrate(200)






