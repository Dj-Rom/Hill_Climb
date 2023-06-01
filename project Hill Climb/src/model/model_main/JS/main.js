"use strict";
 

window.onscroll = function () { window.scrollTo(0, 0); };
launchFullScreen(document.body);
function launchFullScreen(element) {
    if(element.requestFullScreen) {
        element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    // 

}
	//  else if(element.webkitRequestFullScreen) {
    //     element.webkitRequestFullScreen();
    // }
}
export var k = { ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0 };
var cvs = document.querySelector("#canvas");
var ctx = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;


var perm = [];
let val;
while (perm.length < 255) {
	while (perm.includes(val = Math.floor(Math.random() * 255)));
	perm.push(val);
}

var lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise = x => {
	x = x / 155;
	return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}

var player = new function () {
	this.x = cvs.width / 2;
	this.y = cvs.height / 2;
	this.ySpeed = 0;
	this.rot = 0;
	this.rSpeed = 0;

	this.img = new Image();
	this.img.src = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/Car15Silver.svg"
	this.draw = function () {
		var p1 = cvs.height - noise(t + this.x) * 0.95;
		var p2 = cvs.height - noise(t + 5 + this.x) * 0.95;

		var grounded = 0;
		if (p1 - 12 > this.y) {
			this.ySpeed += .158;
		} else {
			this.ySpeed -= this.y - (p1 - 12);
			this.y = p1 - 12;
			grounded = 1.99;
		}

		var angle = Math.atan2((p2 - 12) - this.y, (this.x + 5) - this.x);
		this.y += this.ySpeed;

		if (!playing || grounded && Math.abs(this.rot) > Math.PI * 0.5) {
			playing = false;
			this.rSpeed = 1;
			k.ArrowUp = 0.12;
			this.x -= speed * 5;
		}


		if (grounded && playing) {
			this.rot -= (this.rot - angle) * 0.65;
			this.rSpeed = this.rSpeed - (angle - this.rot);
		}
		this.rSpeed += (k.ArrowLeft - k.ArrowRight) * 0.05;
		this.rot -= this.rSpeed * 0.1;
		if (this.rot > Math.PI) this.rot = -Math.PI;
		if (this.rot < -Math.PI) this.rot = Math.PI;
		ctx.save();
		ctx.translate(this.x, this.y - 14);
		ctx.rotate(this.rot);
		ctx.drawImage(this.img, -20, -20, 45, 45);
		ctx.restore();
	}
}


var t = 0;
var speed = 0;
var playing = true;

function loop() {

	speed -= (speed - (k.ArrowUp - k.ArrowDown)) * 0.01;
	t += 10 * speed;
	ctx.fillStyle = "#91EBFF";
	ctx.fillRect(0, 0, cvs.width, cvs.height);

	ctx.beginPath();
	ctx.arc(cvs.width / 4, cvs.height / 6, Math.floor(cvs.width / 15), 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#ecef54"
	ctx.strokeStyle = "#ecef54"

	for (let f = 0; f < 5; f++) {
		const imgCloud = new Image();
		imgCloud.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg'
		ctx.drawImage(imgCloud, cvs.width - cvs.width + (500 * f), cvs.height - cvs.height + 250 * f)
		const imgCloud2 = new Image();
		imgCloud2.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg'
		ctx.drawImage(imgCloud2, cvs.width - cvs.width / 2 + (500 * f), cvs.height - cvs.height + 150 * f)

		const imgCloud3 = new Image();
		imgCloud3.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud.svg'
		ctx.drawImage(imgCloud, cvs.width - cvs.width / 2.5 + (500 * f), cvs.height - cvs.height + 10 * f)

		const imgCloud4 = new Image();
		imgCloud4.src = 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/svg/cloud2.svg'
		ctx.drawImage(imgCloud4, 150 + (500 * f), cvs.height - 750 - (50 * f))

	}








	ctx.lineTo(cvs.width, cvs.height);
	ctx.fill();

	ctx.fillStyle = "#70c100";
	ctx.beginPath();

	ctx.moveTo(0, cvs.height);
	for (let i = 0; i < cvs.width; i++)
		ctx.lineTo(i, cvs.height - noise(t + i) * .95);
	ctx.lineTo(cvs.width, cvs.height);
	ctx.fill();


	ctx.beginPath();
	ctx.fillStyle = "#527b52";
	ctx.moveTo(0, cvs.height);
	for (let i = 0; i < cvs.width; i++)
		ctx.lineTo(i, cvs.height - noise(t + i) * .75);
	ctx.lineTo(cvs.width, cvs.height);
	ctx.fill();


	ctx.beginPath();
	ctx.fillStyle = "#c89566";
	ctx.moveTo(0, cvs.height);
	for (let i = 0; i < cvs.width; i++)
		ctx.lineTo(i, cvs.height - noise(t + i) * .65);
	ctx.lineTo(cvs.width, cvs.height);
	ctx.fill();


	ctx.beginPath();
	ctx.fillStyle = "#a9794d";
	ctx.moveTo(0, cvs.height);
	for (let i = 0; i < cvs.width; i++)
		ctx.lineTo(i, cvs.height - noise(t + i) * .25);
	ctx.lineTo(cvs.width, cvs.height);
	ctx.fill();

	player.draw();
	if (player.x < 0)
		restart();
	requestAnimationFrame(loop);
}






function restart() {

	player = new player();
	t = 0;
	speed = 0;
	playing = true;
	k = { ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0 };

}
loop();




