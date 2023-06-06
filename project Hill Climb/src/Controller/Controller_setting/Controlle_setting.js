let forward1 = document.getElementById('Forward');
let Bforward1 = document.getElementById('B_Forward');
let back1 = document.getElementById('back');
let BBack1 = document.getElementById('B_Back');
const settingBtn1 = document.getElementById('settingBtn')
let settingGame = {
    forwardKey: 'ArrowUp',
    backKey: 'ArrowDown',
    B_forwardKey: 'ArrowRight',
    B_BackKey: 'ArrowLeft'
}



localStorage["HillClimb"] = localStorage["HillClimb"] ? localStorage["HillClimb"] : JSON.stringify({})
if (localStorage["HillClimb"] === JSON.stringify({})) {
    forward1.value = settingGame.forwardKey
    Bforward1.value = settingGame.backKey
    back1.value = settingGame.BforwardKey
    BBack1.value = settingGame.BBackKey
} else {
    let data = JSON.parse(localStorage["HillClimb"])
    forward1.value = data.forwardKey
    Bforward1.value = data.backKey
    back1.value = data.BforwardKey
    BBack1.value = data.BBackKey
}



forward1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.forwardKey = event.key })
Bforward1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.BforwardKey = event.key})
back1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.backKey = event.key })
BBack1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.BBackKey = event.key })






settingBtn1.addEventListener('click', () => {
    event.preventDefault();
    settingGame.forwardKey = forward1.value
    settingGame.backKey = Bforward1.value
    settingGame.BforwardKey = back1.value
    settingGame.BBackKey = BBack1.value
    let dataS = JSON.stringify(settingGame)
    localStorage["HillClimb"] = dataS
    forward1.value = settingGame.forwardKey
    Bforward1.value = settingGame.backKey
    back1.value = settingGame.BforwardKey
    BBack1.value = settingGame.BBackKey
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html" 


})



