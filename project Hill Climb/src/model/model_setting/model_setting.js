

let forward = document.querySelector('#Forward');
let Bforward = document.querySelector('#B_Forward');
let  back= document.querySelector('#back');
let  BBack= document.querySelector('#B_Back');
const settingBtn1 = document.getElementById('settingBtn')
 let  settingGame  = {
    forwardKey: 'ArrowUp', 
       backKey: 'ArrowDown',
    B_forwardKey: 'ArrowRight',
    B_BackKey: 'ArrowLeft'};



    let link_was_clicked = false;
    document.addEventListener("click", function(e) {
    
       if (e.target.nodeName.toLowerCase() === 'button'||e.target.nodeName.toLowerCase() === 'a') {
          link_was_clicked = true;
       }
    }, true);
    
    window.onbeforeunload = function(e) {
        if(link_was_clicked) {
            return;
        }
        return confirm('Are you sure?');
    }

localStorage["HillClimb"] =  localStorage["HillClimb"]? localStorage["HillClimb"]: JSON.stringify({})
if(localStorage["HillClimb"] == JSON.stringify({})){
forward.value = settingGame.forwardKey;
Bforward.value = settingGame.backKey;
back.value = settingGame.B_forwardKey;
BBack.value = settingGame.B_BackKey;
}else{
    let data = JSON.parse(localStorage["HillClimb"])
    forward.value = data.forwardKey;
Bforward.value = data.B_forwardKey ;
back.value = data.backKey;
BBack.value = data.B_BackKey;
}


    forward.addEventListener('keyup', (event) => {event =event||window.event; 
         forward.value = event.key; settingGame.forwardKey = event.key })
Bforward.addEventListener('keyup', (event) => {event =event||window.event; 
     Bforward.value = event.key; settingGame.B_forwardKey = event.key })
back.addEventListener('keyup', (event) => {event =event||window.event; 
     back.value = event.key; settingGame.backKey = event.key })
BBack.addEventListener('keyup', (event) => {event =event||window.event; 
     BBack.value = event.key; settingGame.B_BackKey = event.key })






settingBtn1.addEventListener('click',()=>{
    settingGame.forwardKey = forward.value
    settingGame.backKey= back.value
    settingGame.B_forwardKey = Bforward.value
    settingGame.B_BackKey = BBack.value
    let dataS = JSON.stringify(settingGame)
      localStorage["HillClimb"] = dataS
    forward.value = settingGame.forwardKey
Bforward.value = settingGame.B_forwardKey
back.value = settingGame.backKey
BBack.value = settingGame.B_BackKey
location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html"

})


