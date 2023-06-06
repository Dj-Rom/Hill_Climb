let forward1 = document.getElementById('Forward');
let B_forward = document.getElementById('B_Forward');
let back = document.getElementById('back');
let B_Back = document.getElementById('B_Back');
const settingBtn = document.getElementById('settingBtn')
let settingGame = {
    forwardKey: 'ArrowUp',
    backKey: 'ArrowDown',
    B_forwardKey: 'ArrowRight',
    B_BackKey: 'ArrowLeft'
}



localStorage["HillClimb"] = localStorage["HillClimb"] ? localStorage["HillClimb"] : JSON.stringify({})
if (localStorage["HillClimb"] === JSON.stringify({})) {
    forward1.value = settingGame.forwardKey
    B_forward.value = settingGame.backKey
    back.value = settingGame.B_forwardKey
    B_Back.value = settingGame.B_BackKey
} else {
    let data = JSON.parse(localStorage["HillClimb"])
    forward1.value = data.forwardKey
    B_forward.value = data.backKey
    back.value = data.B_forwardKey
    B_Back.value = data.B_BackKey
}



forward1.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.forwardKey = event.key })
B_forward.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.backKey = event.key })
back.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.B_forwardKey = event.key })
B_Back.addEventListener('keydown', () => { event.preventDefault(); this.value = event.key; settingGame.B_BackKey = event.key })






settingBtn.addEventListener('click', () => {
    event.preventDefault();
    settingGame.forwardKey = forward1.value
    settingGame.backKey = B_forward.value
    settingGame.B_forwardKey = back.value
    settingGame.B_BackKey = B_Back.value
    let dataS = JSON.stringify(settingGame)
    localStorage["HillClimb"] = dataS
    forward1.value = settingGame.forwardKey
    B_forward.value = settingGame.backKey
    back.value = settingGame.B_forwardKey
    B_Back.value = settingGame.B_BackKey

    setTimeout(() => { location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html" }, 2000)


})


