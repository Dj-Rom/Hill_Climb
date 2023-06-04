"use strict";let kontrole={ArrowUp:0,ArrowDown:0,ArrowLeft:0,ArrowRight:0};function mobileKontrole(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&0==window.orientation?(confirm("this game needs a rotated device"),window.location.reload(!0)):game()}function game(){let i=0;const o=document.createElement("div");o.id="visualGameTime",document.body.append(o);const h=document.querySelector("#canvas"),l=(h.width=window.innerWidth,h.height=window.innerHeight,h.getContext("2d"));f();let r=0,n=0,d=!0,s=[],e,a=document.getElementById("fon"),g=(a=new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/music_main/phantom.mp3"),document.getElementById("gaz"));function m(e){e.play()}function w(e){e.pause()}for(g=new Audio("https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/music_main/gas.ogg"),(u=document.createElement("audio")).id="fon",u.loop="loop",(t=document.createElement("audio")).id="gaz",t.loop="loop",document.body.append(t),document.body.append(u);s.length<255;){for(;s.includes(e=Math.floor(255*Math.random())););s.push(e)}let c=e=>{return e/=155,t=s[Math.floor(e)],i=s[Math.ceil(e)],e=e-Math.floor(e),t+(i-t)*(1-Math.cos(e*Math.PI))/2;var t,i};var t=document.createElement("div"),u=document.createElement("div");t.id="IProgress",u.id="IProgressPers",document.body.append(t),document.body.append(u);let p=new function(){this.x=h.width/2,this.y=h.height/2,this.ySpeed=0,this.rot=0,this.rSpeed=0,this.cvsHeight=.95,this.img=new Image,this.img.src="https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/Car15Silver.svg",this.draw=function(){var e=h.height-c(r+this.x)*this.cvsHeight,t=h.height-c(r+5+this.x)*this.cvsHeight;let i=0;e-12>this.y?this.ySpeed+=.158:(this.ySpeed-=this.y-(e-12),this.y=e-12,i=1.99);e=Math.atan2(t-12-this.y,this.x+5-this.x);this.y+=this.ySpeed,(!d||i&&Math.abs(this.rot)>.5*Math.PI)&&(d=!1,this.rSpeed=1,kontrole.ArrowUp=.12,this.x-=5*n),i&&d&&(this.rot-=.65*(this.rot-e),this.rSpeed=this.rSpeed-(e-this.rot)),this.rSpeed+=.05*(kontrole.ArrowLeft-kontrole.ArrowRight),this.rot-=.1*this.rSpeed,this.rot>Math.PI&&(this.rot=-Math.PI),this.rot<-Math.PI&&(this.rot=Math.PI),l.save(),l.translate(this.x,this.y-14),l.rotate(this.rot),l.drawImage(this.img,-20,-20,45,45),l.restore()}};function f(){var e=new Image,t=(e.src="https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg",l.drawImage(e,h.width-h.width+500,h.height-h.height+250),new Image);t.src="https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg",l.drawImage(t,h.width-h.width/2+500,h.height-h.height+150);(new Image).src="https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg",l.drawImage(e,h.width-h.width/2.5+500,h.height-h.height+10);t=new Image;t.src="https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg",l.drawImage(t,650,h.height-750-50)}(t=window).requestFullScreen?t.requestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen(),function e(){var t;if(i=.2*r,f(),(1===kontrole.ArrowUp?(m(a),m):w)(g),o.innerHTML=i.toFixed(0),i<3e4&&(t=Math.round(i/3e4*100),document.getElementById("IProgressPers").style.width=t+"%",console.log(t)),n-=.009*(n-(kontrole.ArrowUp-kontrole.ArrowDown)),r+=10*n,l.fillStyle="#91EBFF",l.fillRect(0,0,h.width,h.height),l.beginPath(),l.arc(h.width/4,h.height/6,Math.floor(h.width/15),0,2*Math.PI),f(),l.stroke(),l.fillStyle="#ecef54",l.strokeStyle="#ecef54",3e4<r&&((t=new Image).src="/Hill_Climb/project Hill Climb/src/view/view_main/png/fin.png",l.drawImage(t,h.width/2,h.height/6)),400<h.height){l.lineTo(h.width,h.height),l.fill(),l.fillStyle="#70c100",l.beginPath(),l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.95*c(r+e));l.lineTo(h.width,h.height),l.fill(),l.beginPath(),l.fillStyle="#527b52",l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.75*c(r+e));l.lineTo(h.width,h.height),l.fill(),l.beginPath(),l.fillStyle="#c89566",l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.65*c(r+e));l.lineTo(h.width,h.height),l.fill(),l.beginPath(),l.fillStyle="#a9794d",l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.25*c(r+e))}else{l.lineTo(h.width,h.height),l.fill(),p.cvsHeight=.65,l.fillStyle="#70c100",l.beginPath(),l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.64*c(r+e));l.lineTo(h.width,h.height),l.fill(),l.beginPath(),l.fillStyle="#527b52",l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.45*c(r+e));l.lineTo(h.width,h.height),l.fill(),l.beginPath(),l.fillStyle="#c89566",l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.35*c(r+e));l.lineTo(h.width,h.height),l.fill(),l.beginPath(),l.fillStyle="#a9794d",l.moveTo(0,h.height);for(let e=0;e<h.width;e++)l.lineTo(e,h.height-.5*c(r+e))}l.lineTo(h.width,h.height),l.fill(),p.draw(),p.x<h.width/4.9&&(a.pause(),w(a),r=!1,n=0,d=!0,kontrole={ArrowUp:0,ArrowDown:0,ArrowLeft:0,ArrowRight:0}),requestAnimationFrame(e)}()}window.onload=mobileKontrole(),window.onscroll=function(){window.scrollTo(0,0)};export{kontrole};
