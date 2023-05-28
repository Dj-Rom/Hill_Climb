

let pressedRightBool = true;
function pressedEvent(){
    
document.addEventListener("keydown", ()=>{

    if( event.key === 'ArrowRight'){
   return  pressedRightBool = true;
    }  

   
});

requestAnimationFrame(pressedEvent)
return pressedRightBool

}
console.log(pressedEvent());

export let  pressedRight = pressedEvent();





