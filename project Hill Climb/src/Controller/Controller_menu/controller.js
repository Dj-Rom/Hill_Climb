


"use strict";
const menuNewGame = document.getElementById("menu_New_Game");
const menuСontinueGame = document.getElementById("menu_Сontinue_Game");
const menuSetting = document.getElementById("menu_Setting");
const menuWorldResult = document.getElementById("menu_World_Result");
const on = document.querySelector("#soundOn");
const off = document.querySelector("#soundOff");


on.addEventListener("click", (event) => {
    event = event || window.event;
    event = event || window.event
    event.preventDefault();
    on.style.display = "none";
    off.style.display = "block";
});
off.addEventListener("click", (event) => {
    event = event || window.event;
    event.preventDefault();
    off.style.display = "none";
    on.style.display = "block";
});
on.addEventListener("touch", (event) => {
    event = event || window.event;
    event.preventDefault();
    on.style.display = "none";
    off.style.display = "block";
});
off.addEventListener("touch", (event) => {
    event = event || window.event;
    event.preventDefault();
    off.style.display = "none";
    on.style.display = "block";
});

menuNewGame.addEventListener("click", (event) => {
    event = event || window.event; event.preventDefault()
    localStorage["saveGamePos"] = JSON.stringify(0)
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html"
});
menuСontinueGame.addEventListener(
    "click", () => {
        event.preventDefault();
        location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html"
    });
menuSetting.addEventListener("click", (event) => {
    event = event || window.event; event.preventDefault();

    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/setting.html"
});
menuWorldResult.addEventListener("click", (event) => {
    event = event || window.event; event.preventDefault();

    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html"
});

menuNewGame.addEventListener("touch", (event) => {
    event = event || window.event; event.preventDefault();
    localStorage["saveGamePos"] = JSON.stringify(0)
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html";
    window.navigator.vibrate(200)
});
menuСontinueGame.addEventListener("touch", (event) => {
    event = event || window.event; event.preventDefault();
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html";
    window.navigator.vibrate(200)
})
menuSetting.addEventListener("touch", (event) => {
    event = event || window.event; event.preventDefault();
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/setting.html";
    window.navigator.vibrate(200)
});
menuWorldResult.addEventListener("touch", (event) => {
    event = event || window.event;
    event.preventDefault();
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html";
    window.navigator.vibrate(200)
});



// the user wants to close the page


let link_was_clicked = false;
document.addEventListener("click", function(e) {
   if (e.target.nodeName.toLowerCase() == 'button') {
      link_was_clicked = true;
   }
}, true);

window.onbeforeunload = function(e) {
    if(link_was_clicked) {
        return;
    }
    return Alert('Are you sure?');
}
