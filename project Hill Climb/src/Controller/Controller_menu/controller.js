"use strict";

const menuNewGame = document.getElementById("menu_New_Game");
const menuСontinueGame = document.getElementById("menu_Сontinue_Game");
const menuSetting = document.getElementById("menu_Setting");
const menuWorldResult = document.getElementById("menu_World_Result");


menuNewGame.addEventListener('click', () => location=('../../view/view_main/main_game_start.html'))
menuСontinueGame.addEventListener('click', () => location=('../../view/view_main/main_game_start.html'))
menuSetting.addEventListener('click', () => location=('../../view/view_setting/seting.html'))
menuWorldResult.addEventListener('click', () => location=('../../view/view_result/result.html'))