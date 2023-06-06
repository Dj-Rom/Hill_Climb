let forward1 = document.getElementById('Forward');
let B_forward1 = document.getElementById('B_Forward');
let back1 = document.getElementById('back');
let B_Back1 = document.getElementById('B_Back');
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
    B_forward1.value = settingGame.backKey
    back1.value = settingGame.B_forwardKey
    B_Back1.value = settingGame.B_BackKey
} else {
    let data = JSON.parse(localStorage["HillClimb"])
    forward1.value = data.forwardKey
    B_forward1.value = data.backKey
    back1.value = data.B_forwardKey
    B_Back1.value = data.B_BackKey
}



forward1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.forwardKey = event.key })
B_forward1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.backKey = event.key })
back1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.B_forwardKey = event.key })
B_Back1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.B_BackKey = event.key })






settingBtn1.addEventListener('click', () => {
    event.preventDefault();
    settingGame.forwardKey = forward1.value
    settingGame.backKey = B_forward1.value
    settingGame.B_forwardKey = back1.value
    settingGame.B_BackKey = B_Back1.value
    let dataS = JSON.stringify(settingGame)
    localStorage["HillClimb"] = dataS
    forward1.value = settingGame.forwardKey
    B_forward1.value = settingGame.backKey
    back1.value = settingGame.B_forwardKey
    B_Back1.value = settingGame.B_BackKey
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html" 


})



