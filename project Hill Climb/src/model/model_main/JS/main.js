"use strict";
export let kontrole = { ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0 };
const cvs = document.querySelector("#canvas")

  window.onload = mobileKontrole()



function mobileKontrole(){

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
           if(  window.orientation == 0 ){
			const user = confirm("this game needs a rotated device")
			 user?window.location.reload(true):window.location.reload(true);
		} else {
			game ()
			cvs.width = window.innerWidth;
		cvs.height = window.innerHeight;
		}}
		
// if (window.orientation > 0 ){
// 	game ()
// 			cvs.width = window.innerWidth;
// 		cvs.height = window.innerHeight;
// 		}else{ mobileKontrole() }
}


window.onscroll = function () {
	window.scrollTo(0, 0);
};


function game () {
	
const cvs = document.querySelector("#canvas")

const ctx = cvs.getContext("2d");
let t = 0;
let speed = 0;
let playing = true;
let perm = [];
let val;
	let fon = document.getElementById("fon");
fon = new Audio(
	"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/music_main/phantom.mp3"
);

let gaz = document.getElementById("gaz");
gaz = new Audio(
	"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/music_main/gas.ogg"
);

sound();

function playAudio(elem) {
	elem.play();
}

function pauseAudio(elem) {
	elem.pause();
}




while (perm.length < 255) {
	while (perm.includes((val = Math.floor(Math.random() * 255))));
	perm.push(val);
}

let lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
let noise = x => {
	x = x / 155;
	return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
};

let player = new function () {
	this.x = cvs.width / 2;
	this.y = cvs.height / 2;
	this.ySpeed = 0;
	this.rot = 0;
	this.rSpeed = 0;
	this.cvsHeight = 0.95;
	this.img = new Image();
	this.img.src =
		"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/Car15Silver.svg";
	this.draw = function () {
		let p1 = cvs.height - noise(t + this.x) * this.cvsHeight;
		let p2 = cvs.height - noise(t + 5 + this.x) * this.cvsHeight;

		let grounded = 0;
		if (p1 - 12 > this.y) {
			this.ySpeed += 0.158;
		} else {
			this.ySpeed -= this.y - (p1 - 12);
			this.y = p1 - 12;
			grounded = 1.99;
		}

		let angle = Math.atan2(p2 - 12 - this.y, this.x + 5 - this.x);
		this.y += this.ySpeed;

		if (!playing || (grounded && Math.abs(this.rot) > Math.PI * 0.5)) {
			playing = false;
			this.rSpeed = 1;
			kontrole.ArrowUp = 0.12;
			this.x -= speed * 5;
		}

		if (grounded && playing) {
			this.rot -= (this.rot - angle) * 0.65;
			this.rSpeed = this.rSpeed - (angle - this.rot);
		}
		this.rSpeed += (kontrole.ArrowLeft - kontrole.ArrowRight) * 0.05;
		this.rot -= this.rSpeed * 0.1;
		if (this.rot > Math.PI) this.rot = -Math.PI;
		if (this.rot < -Math.PI) this.rot = Math.PI;
		ctx.save();
		ctx.translate(this.x, this.y - 14);
		ctx.rotate(this.rot);
		ctx.drawImage(this.img, -20, -20, 45, 45);
		ctx.restore();
	};
}();



function loop() {
	speed -= (speed - (kontrole.ArrowUp - kontrole.ArrowDown)) * 0.009;
	t += 10 * speed;
	ctx.fillStyle = "#91EBFF";
	ctx.fillRect(0, 0, cvs.width, cvs.height);

	ctx.beginPath();
	ctx.arc(
		cvs.width / 4,
		cvs.height / 6,
		Math.floor(cvs.width / 15),
		0,
		2 * Math.PI
	);
	ctx.stroke();
	ctx.fillStyle = "#ecef54";
	ctx.strokeStyle = "#ecef54";

	for (let f = 0; f < 3; f++) {
		const imgCloud = new Image();
		imgCloud.src =
			"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg";
		ctx.drawImage(
			imgCloud,
			cvs.width - cvs.width + 500 * f,
			cvs.height - cvs.height + 250 * f
		);
		const imgCloud2 = new Image();
		imgCloud2.src =
			"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg";
		ctx.drawImage(
			imgCloud2,
			cvs.width - cvs.width / 2 + 500 * f,
			cvs.height - cvs.height + 150 * f
		);

		const imgCloud3 = new Image();
		imgCloud3.src =
			"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg";
		ctx.drawImage(
			imgCloud,
			cvs.width - cvs.width / 2.5 + 500 * f,
			cvs.height - cvs.height + 10 * f
		);

		const imgCloud4 = new Image();
		imgCloud4.src =
			"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg";
		ctx.drawImage(imgCloud4, 150 + 500 * f, cvs.height - 750 - 50 * f);
	}

	if (t > 30000) {
		final();
	}

	earthFunc(cvs.height);

	if (player.x < 500) {
		fon.pause();
		pauseAudio(fon);

		restart();
	}
	requestAnimationFrame(loop);

	if (kontrole.ArrowUp === 1) {
		playAudio(fon);
		playAudio(gaz);
	} else {
		pauseAudio(gaz);
	}
}

function sound() {
	const soundAudioFon = document.createElement("audio");
	soundAudioFon.id = "fon";
	soundAudioFon.loop = "loop";

	const soundAudioGaz = document.createElement("audio");
	soundAudioGaz.id = "gaz";
	soundAudioGaz.loop = "loop";
	document.body.append(soundAudioGaz);
	document.body.append(soundAudioFon);
}

function earthFunc(params) {
	if (params > 400) {
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();
		ctx.fillStyle = "#70c100";
		ctx.beginPath();

		ctx.moveTo(0, cvs.height);
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.95);
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#527b52";
		ctx.moveTo(0, cvs.height);
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.75);
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#c89566";
		ctx.moveTo(0, cvs.height);
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.65);
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#a9794d";
		ctx.moveTo(0, cvs.height);
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.25);
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
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.65);
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#527b52";
		ctx.moveTo(0, cvs.height);
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.45);
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#c89566";
		ctx.moveTo(0, cvs.height);
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.35);
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#a9794d";
		ctx.moveTo(0, cvs.height);
		for (let i = 0; i < cvs.width; i++)
			ctx.lineTo(i, cvs.height - noise(t + i) * 0.5);
		ctx.lineTo(cvs.width, cvs.height);
		ctx.fill();
		player.draw();
	}
}
launchFullScreen(window);
function launchFullScreen(element) {
	if (element.requestFullScreen) {
		element.requestFullScreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
}

function final() {
	const finalPng = new Image();
	finalPng.src =
		"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/png/fin.png";

	ctx.drawImage(finalPng, cvs.width / 2, cvs.height / 6);
}

function restart() {
	t = false;
	speed = 0;
	playing = true;
	kontrole = { ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0 };
}
loop();}
