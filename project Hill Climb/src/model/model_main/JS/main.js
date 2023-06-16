"use strict";
// import-exports
import { storeInfo } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/ajax.js";
export let dataRecordPred = {};
export let resultGetUserResult = 0;
export let kontrole = {
  ArrowUp: 0,
  ArrowDown: 0,
  ArrowLeft: 0,
  ArrowRight: 0
};



// localStorage
localStorage["saveGamePos"] = localStorage["saveGamePos"]?localStorage["saveGamePos"]: JSON.stringify(0)
let LocalStoregeNameUser = '';
localStorage["saveGamePos"]='0'
localStorage["HillClimbUser"] = localStorage["HillClimbUser"] ? localStorage["HillClimbUser"] : JSON.stringify({});
// const
const main_Contener= document.querySelector(".main_Contener")
let noise;
let player;
const h3= document.querySelector("h3");
h3.style.display = "none";

const finalPng = new Image();
    finalPng.src = " https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/png/fin.png";
    finalPng.id = 'finalPng'
    finalPng.alt = "final";
    finalPng.style.display = "none";
    ctx.drawImage(finalPng, cvs.width / 2, cvs.height / 6);

const GO = document.createElement('img');
GO.id= 'gameOverSsvg';
GO.src="./svg/GameOverSvg.svg";
GO.alt="gameOver";
GO.style.opacity = 0
main_Contener.appendChild(GO);

let gameOveSsvg = document.getElementById('gameOverSsvg');
let secGame;
let canvasGame = document.createElement('canvas');
canvasGame.id = "canvas";
main_Contener.append(canvasGame);

let t = (JSON.parse(localStorage["saveGamePos"])/0.2)
let speed = 0;
let playing = true;
let perm = [];
let val;

const visualGameTime = document.createElement('div');
visualGameTime.id = "visualGameTime";
main_Contener.append(visualGameTime);

let fon = document.getElementById("fon");
  fon = new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/music_main/phantom.mp3");
let br = document.getElementById("br");
  br = new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/music_main/br.mp3");
let gaz = document.getElementById("gaz");
  gaz = new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/music_main/gas.mp3");


  const imgCloud4 = new Image();
  imgCloud4.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg";
  imgCloud4.alt = "cloud"
  const imgCloud3 = new Image();
  imgCloud3.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg";
  imgCloud3.alt = "cloud";
  const imgCloud2 = new Image();
  imgCloud2.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg";
  imgCloud2.alt = "cloud";
  const imgCloud = new Image();
  imgCloud.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg";
  imgCloud.alt = "cloud";


  const IProgress = document.createElement('div');
IProgress.style.opacity=.66
  const IProgressPers = document.createElement('div');
 IProgressPers.style.opacity=.66 
  IProgress.id = "IProgress";
  IProgressPers.id = "IProgressPers";
  main_Contener.append(IProgress);
  main_Contener.append(IProgressPers);

  const imgGaz = document.createElement("img");
  imgGaz.id = "imgGaz";
  imgGaz.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/forward.svg";
  imgGaz.style.display = "none";
  imgGaz.style.position = "absolute";
  imgGaz.style.right = "4%";
  imgGaz.style.bottom = "4%";
  imgGaz.style.zIndex = "10";
  imgGaz.style.opacity = "0.56";
  main_Contener.append(imgGaz);
  const imgbr = document.createElement("img");
  imgbr.id = "imgbr";
  imgbr.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/back.svg";
  imgbr.style.display = "none";
  imgbr.style.position = "absolute";
  imgbr.style.left = "4%";
  imgbr.style.bottom = "4%";
  imgbr.style.zIndex = "10";
  imgbr.style.opacity = "0.56";
  main_Contener.append(imgbr);
  const imgGazM = document.getElementById("imgGaz");
  imgGazM.alt = "Forward"
  const imgbrM = document.getElementById("imgbr");
  imgbrM.alt = "back"
  const cvs = document.querySelector("#canvas");
  const ctx = cvs.getContext("2d");

mobileKontrole();
// fuction for what kind of device?


function mobileKontrole() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) && window.orientation == 0) {
    const user = confirm(" \u20D4    You need to rotate your device! ПЕРЕВЕРНИТЕ ВАШЕ УСТРОЙСТВО    \u20D5");
    (user)? window.location.reload(true):window.location.reload(true);}
  
  
    else { game();
  }
}



// window.onscroll = function () {
//   window.scrollTo(0, 0);
// };

function game() {
   // create player
 player = new function () {
  this.x = cvs.width / 2;
  this.y = (cvs.height / 2);
  this.ySpeed = 0;
  this.rot = 0;
  this.rSpeed = 0;
  this.cvsHeight = 0.95;
  this.img = new Image();
  this.img.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/png/moto.png";
  this.img.alt = "car";
  this.draw = function () {
    let p1 = cvs.height - noise(t + this.x) * this.cvsHeight;
    let p2 = cvs.height - noise(t + 5 + this.x) * this.cvsHeight;
    let grounded = 0;
    if (p1 - 12 > this.y) {
      this.ySpeed += 0.158;
    } else {
      // horizontal player
      this.ySpeed -= this.y - (p1 - 12.3);
      this.y = p1 - 12.3;
      // 
      grounded = 1.44;
    }
    let angle = Math.atan2(p2 - 12 - this.y, this.x + 5 - this.x);
    this.y += this.ySpeed;
    if (!playing || grounded && Math.abs(this.rot) > Math.PI * 0.5) {
      playing = false;
      this.rSpeed = 1;
      kontrole.ArrowUp = 0.12;
      this.x -= speed * 2;
    }
    if (grounded && playing) {
      this.rot -= (this.rot - angle) * 0.65;
      this.rSpeed = this.rSpeed - (angle - this.rot);
    }
    // balance the rotation when flying
    this.rSpeed += (kontrole.ArrowLeft - kontrole.ArrowRight) * 0.05;
    this.rot -= this.rSpeed * 0.1;
    if (this.rot > Math.PI) this.rot = -Math.PI;
    if (this.rot < -Math.PI) this.rot = Math.PI;
    ctx.save();
    ctx.translate(this.x, this.y - 14);
    ctx.rotate(this.rot);
    ctx.drawImage(this.img, -20, -20, 65, 65);
    ctx.restore();
    
    
  };
}();
// for mobile ios
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    cvs.width = document.documentElement.clientWidth;
    cvs.height = document.documentElement.clientHeight;
    imgGazM.style.display = "block";
    imgbrM.style.display = "block";
  } else{
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
  }

 
  

 


 
  

 
  
 
  function loop() {
    const RAF = requestAnimationFrame(loop);
    while (perm.length < 255) {
      while (perm.includes(val = Math.floor(Math.random() * 255)));
      perm.push(val);
    }
    let lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
    noise = x => {
      x = x / 255;
      return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
    };
  
sound();
gameTime();
musicFonAndGaz();
    resultGetUserResult =secGame.toFixed(0)
    visualGameTime.innerHTML = secGame.toFixed(0);
    if (secGame < 7800) {
      const perc = Math.round(secGame / 7800 * 100);
      document.getElementById('IProgressPers').style.width = perc + "%";
    }

    speed -= (speed - (kontrole.ArrowUp - kontrole.ArrowDown)) * 0.009;
    t += 10 * speed;
    ctx.fillStyle = "#91EBFF";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.beginPath();
    ctx.arc(cvs.width / 4, cvs.height / 6, Math.floor(cvs.width / 15), 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#ecef54";
    ctx.strokeStyle = "#ecef54";


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
      cloudCicl (false)
    }else cloudCicl (true)
    
   
  
   
    if (secGame.toFixed(0) > 7800) {
      final();
      cancelAnimationFrame(RAF)
    }
   
    earthFunc(cvs.height);
    if (player.rSpeed === 1 || t < 0) {
      fon.pause();
      cancelAnimationFrame(RAF)
      pauseAudio(fon);
      setTimeout(restart(),200)
      return resultGetUserResult;
    }

  }
  loop();

}
function gameTime() {
  secGame = t * 0.2;
  return secGame;
}

function playAudio(elem) {
  elem.play();
}
function pauseAudio(elem) {
  elem.pause();
}
  function cloudCicl (device) {
 
    if(device){
      ctx.drawImage(imgCloud2,  (cvs.width/100*80), cvs.height /100 * 10);
      ctx.drawImage(imgCloud,  (cvs.width/100*65), cvs.height /100 * 33);
      ctx.drawImage(imgCloud2,  (cvs.width/100*45), cvs.height /100 * 7);
    ctx.drawImage(imgCloud2,  (cvs.width/100*15), cvs.height /100 * 22);
     ctx.drawImage(imgCloud, (cvs.width/100*1), cvs.height  /100 * 8);
    
    } else {
      ctx.drawImage(imgCloud2,  (cvs.width/100*20), cvs.height /100 * 3);
      ctx.drawImage(imgCloud2,  (cvs.width/100*70), cvs.height /100 * 7);
  
     
    }
  }
  function sound() {
    const soundAudioFon = document.createElement("audio");
    soundAudioFon.id = "fon";
    soundAudioFon.loop = "loop";
    const soundAudioGaz = document.createElement("audio");
    soundAudioGaz.id = "gaz";
    soundAudioGaz.loop = "loop";
    main_Contener.append(soundAudioGaz);
    main_Contener.append(soundAudioFon);
  }
  function earthFunc(params) {
    if (params > 400) {
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      ctx.fillStyle = "#70c100";
      ctx.beginPath();
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.963);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#527b52";
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.75);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#c89566";
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.65);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#a9794d";
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.25);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      player.draw();
    } else {
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      player.cvsHeight = 0.65;
      ctx.fillStyle = "#70c100";
      ctx.beginPath();
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.659);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#527b52";
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.45);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#c89566";
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.35);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#a9794d";
      ctx.moveTo(0, cvs.height);
      for (let i = 0; i < cvs.width; i++) ctx.lineTo(i, cvs.height - noise(t + i) * 0.5);
      ctx.lineTo(cvs.width, cvs.height);
      ctx.fill();
      player.draw();
    }
  }
  function final() {
  
    
    document.querySelector('#finalPng').style.display = "block";
 
   
  }
  function restart() {;
  gameOveSsvg.style.opacity  = 0.97 ;
 
    if (localStorage["HillClimbUser"] === JSON.stringify({})) {
      LocalStoregeNameUser = ' ';
    } else {
      let data1 = JSON.parse(localStorage["HillClimbUser"]);
      LocalStoregeNameUser = data1.name;
    }
    let resultGetUserName = prompt("Please write your name here.", LocalStoregeNameUser);
    localStorage["HillClimbUser"] = JSON.stringify({
      name: resultGetUserName
    });
    resultGetUserResult = secGame.toFixed(0);
    dataRecordPred.nameRecord = resultGetUserName;
    dataRecordPred.score = resultGetUserResult;
    storeInfo();
setTimeout(function () {
      location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html ";
    
},500)
  }
  function musicFonAndGaz() {
    if (kontrole.ArrowUp === 1) {
      imgGazM.style.transform = "rotateX(47deg)";
      imgGazM.style.webkitTransform = "rotateX(47deg)";
      imgGazM.style.MozTransform = "rotateX(47deg)";
      playAudio(fon);
      playAudio(gaz);
    } else {
      imgGazM.style.transform = "rotateX(17deg)";
      imgGazM.style.webkitTransform = "rotateX(17deg)";
      imgGazM.style.MozTransform = "rotateX(17deg)";
      pauseAudio(gaz);
    }
    if (kontrole.ArrowDown === 1) {
      imgbrM.style.transform = "rotateX(47deg)";
      imgbrM.style.webkitTransform = "rotateX(47deg)";
      imgbrM.style.MozTransform = "rotateX(47deg)";
      playAudio(fon);
      pauseAudio(gaz);
      playAudio(br);
    } else {
      imgbrM.style.transform = "rotateX(17deg)";
      imgbrM.style.webkitTransform = "rotateX(17deg)";
      imgbrM.style.MozTransform = "rotateX(17deg)";
      pauseAudio(br);
    }
  }
 












