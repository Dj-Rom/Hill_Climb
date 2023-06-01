

import { k } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
console.log(k)
document.addEventListener("keydown", ()=>{
event.preventDefault()
    if( event.key === 'ArrowRight'){
      k.ArrowRight = 1  
    }  
    if( event.key === 'ArrowLeft'){
        k.ArrowLeft = 1
    }  
    if( event.key === 'ArrowUp'){
        k.ArrowUp = 1
    }  
    if( event.key === 'ArrowDown'){
        k.ArrowDown = 1
    }  

   
}

)
document.addEventListener("keyup",()=>{
    event.preventDefault()
    if( event.key === 'ArrowRight'){
        k.ArrowRight = 0  
      }  
      if( event.key === 'ArrowLeft'){
          k.ArrowLeft = 0
      }  
      if( event.key === 'ArrowUp'){
          k.ArrowUp = 0
      }  
      if( event.key === 'ArrowDown'){
          k.ArrowDown = 0
      }  

})


window.addEventListener('deviceorientation', function(event) {
    if (event.beta > '30' ) {
        k.ArrowRight = 1
    } else if (event.beta < '-30' ) {
          k.ArrowLeft = 1
    }

});



    var el = document.getElementById("canvas");
    el.addEventListener("touchstart",   ()=>{  k.ArrowUp = 1}, false);
    el.addEventListener("touchend",  ()=>{  k.ArrowUp = 0}, false);
    

  
