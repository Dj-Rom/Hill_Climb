
"use strict";
const menuNewGame = document.getElementById("menu_New_Game");
const menuСontinueGame = document.getElementById("menu_Сontinue_Game");
const menuSetting = document.getElementById("menu_Setting");
const menuWorldResult = document.getElementById("menu_World_Result");
const on = document.querySelector("#soundOn");
const off = document.querySelector("#soundOff");


on.addEventListener("click", () => {
    event.preventDefault();
    on.style.display = "none";
    off.style.display = "block";
});
off.addEventListener("click", () => {
    event.preventDefault();
    off.style.display = "none";
    on.style.display = "block";
});
on.addEventListener("touch", () => {
    event.preventDefault();
    on.style.display = "none";
    off.style.display = "block";
});
off.addEventListener("touch", () => {
    event.preventDefault();
    off.style.display = "none";
    on.style.display = "block";
});

menuNewGame.addEventListener("click", ()=>{
        event.preventDefault() 
       menuNewGame.style.fontSize = "70px"
        location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html"
});
menuСontinueGame.addEventListener(
    "click",() => {
        event.preventDefault(); 
        menuСontinueGame.style.fontSize = "70px"
        location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html"
    });
menuSetting.addEventListener("click", () =>{event.preventDefault();
                                            menuSetting.style.fontSize = "70px"
location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html"
});
menuWorldResult.addEventListener("click",() =>{event.preventDefault();
                                               menuWorldResult.style.fontSize = "70px"
location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html"
});

menuNewGame.addEventListener("touch",() =>{event.preventDefault();
location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html";
 window.navigator.vibrate(200)
});
menuСontinueGame.addEventListener("touch",() =>{event.preventDefault();
location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html";
window.navigator.vibrate(200)
})
menuSetting.addEventListener("touch",() => {event.preventDefault();
        location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html";
 window.navigator.vibrate(200)
 });
menuWorldResult.addEventListener("touch", () => {
        event.preventDefault();
        location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html";
    window.navigator.vibrate(200)
});
