"use strict";

const menuNewGame = document.getElementById("menu_New_Game").style.cursor="pointer";
const menuСontinueGame = document.getElementById("menu_Сontinue_Game").style.cursor="pointer";
const menuSetting = document.getElementById("menu_Setting").style.cursor="pointer";
const menuWorldResult = document.getElementById("menu_World_Result").style.cursor="pointer";
const on = document.querySelector("#soundOn").style.cursor="pointer";
const off = document.querySelector("#soundOff").style.cursor="pointer";

on.addEventListener("click", () => {
    on.style.display = "none";
    off.style.display = "block";
});
off.addEventListener("click", () => {
    off.style.display = "none";
    on.style.display = "block";
});
on.addEventListener("touchstart", () => {
    on.style.display = "none";
    off.style.display = "block";
});
off.addEventListener("touchstart", () => {
    off.style.display = "none";
    on.style.display = "block";
});

menuNewGame.addEventListener(
    "click",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html")
);
menuСontinueGame.addEventListener(
    "click",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html")
);
menuSetting.addEventListener(
    "click",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html")
);
menuWorldResult.addEventListener(
    "click",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html")
);

menuNewGame.addEventListener(
    "touchstart",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html")
);
menuСontinueGame.addEventListener(
    "touchstart",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html")
);
menuSetting.addEventListener(
    "touchstart",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html")
);
menuWorldResult.addEventListener(
    "touchstart",
    () =>
    (location =
        "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html")
);
