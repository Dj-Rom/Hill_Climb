"use strict";
  import {pressedRight} from 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/Controller/Controller_main/controller_main.js'
window.addEventListener('load',()=>{

const cvs = document.querySelector('#canvas');
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
const ctx = cvs.getContext('2d');
ctx.fillStyle = '#d4e4fd';

let layers = [];
const trn = (a,b,c)=>a+b+(a-b)*Math.cos(c*Math.PI);
 const noise = (x)=>{
        x=x/200;
        layers.push(Math.random()*100);
        return trn(layers[Math.floor(x)],layers[Math.ceil(x)],x-Math.floor(x))
     }





let speed = 0
const earthHeight = 174,
tree1height = 326,
bushHeight = 123,
bushWidht = 200,
cloudWidht = 220,
cloud2Heigth = 141;
let speedPosX = 0; 
let i = 0
let position = 0
const loop = ()=>{
    speedPosX += speed;
    position+=10
    ctx.fillRect(0, 0, cvs.width, cvs.height);
   
    
    const img = new Image();
    img.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/png/pngEather.png'
    const imgCloud = new Image();
    imgCloud.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg'
    const imgCloud2 = new Image();
    imgCloud2.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg'
    const imgBush = new Image();
    imgBush.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/bush.svg'
    const imgPetrole = new Image();
    imgPetrole.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/stationPetrol.svg'
    const imgCar = new Image();
    imgCar.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/Sedan-car.svg'
    for( let i = 0; i <= cvs.width; i++){
        

ctx.drawImage(img,i,cvs.height - noise(i+position))
ctx.drawImage(imgCloud,500+i*1000,cvs.height-cvs.height)
ctx.drawImage(imgCloud2,cloudWidht+i*1000,cvs.height-cvs.height+cloud2Heigth)     
// ctx.drawImage(imgBush,bushWidht+i*1000,cvs.height - noise(i+position)-earthHeight-bushHeight/2)
ctx.drawImage(imgPetrole,4500,cvs.height-earthHeight-300)
 

}
ctx.drawImage(imgCar,i-5,cvs.height - noise(i+position)-earthHeight/2+50)   
  
        
function car (){
    let p1 = cvs.height -noise(i+this.x)*0.25;
    let p2 = cvs.height -noise(i+6+this.x)*0.25;

    let grounded = 0;
    if(p1-15>this.y){

    }
}
requestAnimationFrame(loop)
}
loop()
})

