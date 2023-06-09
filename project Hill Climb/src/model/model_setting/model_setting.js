const forward = document.getElementById('Forward');
const Bforward = document.getElementById('B_Forward');
const  back= document.getElementById('back');
const  BBack= document.getElementById('B_Back');
const settingBtn = document.getElementById('settingBtn')
let  settingGame1  = {
    forwardKey: 'ArrowUp', 
       backKey: 'ArrowDown',
    B_forwardKey: 'ArrowRight',
    B_BackKey: 'ArrowLeft'}



localStorage["HillClimb"] =  localStorage["HillClimb"]? localStorage["HillClimb"]: JSON.stringify({})
if(localStorage["HillClimb"] === JSON.stringify({})){
forward.value = settingGame.forwardKey
B_forward.value = settingGame.backKey
back.value = settingGame.B_forwardKey
BBack.value = settingGame.B_BackKey
}else{
    let data = JSON.parse(localStorage["HillClimb"])
    forward.value = data.forwardKey
B_forward.value = data.B_forwardKey 
back.value = data.backKey
BBack.value = data.B_BackKey
}


    
 forward.addEventListener('keydown',()=>{this.value = event.key; settingGame.forwardKey = event.key})
 B_forward.addEventListener('keydown',()=>{this.value = event.key;settingGame.backKey = event.key})
 back.addEventListener('keydown',()=>{this.value = event.key;settingGame.B_forwardKey = event.key})
 B_Back.addEventListener('keydown',()=>{this.value = event.key;settingGame.B_BackKey = event.key})


settingBtn.addEventListener('click',()=>{
    settingGame.forwardKey = forward.value
    settingGame.backKey= B_forward.value
    settingGame.B_forwardKey = back.value
    settingGame.B_BackKey = B_Back.value
    let dataS = JSON.stringify(settingGame)
      localStorage["HillClimb"] = dataS
    forward.value = settingGame.forwardKey
B_forward.value = settingGame.backKey
back.value = settingGame.B_forwardKey
B_Back.value = settingGame.B_BackKey
})






