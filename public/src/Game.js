let c = document.getElementById("Space");
let ctx = c.getContext("2d");
let cShot = c.getContext("2d");
let cShot2 = c.getContext("2d");
let Alien = c.getContext("2d");
let Cookie = document. getElementById("cookie");

class Enemy { constructor(EposX, EposY, Ewidth, Eheight,EColor){
  this.EposX = EposX;
  this.EposY  = EposY;
  this.Ewidth  = Ewidth;
  this.Eheight  = Eheight;
  this.EColor = EColor;
  
}
  async drawEnemy (Alien){

  let url = "../../Assets/Sprites/Alien.png";
  let img = new Image();
  await new Promise(r => img.onload=r, img.src=url);

  Alien.fillStyle = this.EColor;
  Alien.drawImage(img,this.EposX,this.EposY,this.Ewidth,this.Eheight);
  console.log("Alien Attacking");
}}

let alien = new Enemy(120, 100, 50, 40, 'white');
alien.drawEnemy(Alien);

class Shot { constructor(posX, posY, width, height,shotColor, speed){
  this.posX = posX;
  this.posY  = posY;
  this.width  = width;
  this.height  = height;
  this.shotColor = shotColor;
  this.speed = speed;

  this.dy = 1 * this.speed;
}
drawShot (cShot){
  cShot.fillStyle = this.shotColor;
  cShot.fillRect(this.posX,this.posY,this.width,this.height);
  console.log("shot fired");
}

drawShot2(cShot2){
  cShot2.fillStyle="black";
  cShot2.clearRect(this.posX-50,this.posY+20,this.width*50,this.height);
}
update(){
  this.drawShot(cShot);
  this.drawShot2(cShot2);
  this.posY += this.dy;
}
}

let shot = new Shot(148, 500, 5, 30, 'white', -30);


let updateShot = function(){

  requestAnimationFrame(updateShot);
  shot.update();
}

Cookie.addEventListener("click",() => {shot.drawShot(cShot), updateShot()});

function drawShip (){
  ctx.fillStyle = "purple";
  ctx.fillRect(130, 560, 40, 30);
  ctx.fillRect(140, 550, 20, 20);
}


c.width = 300;
c.height = 700;
c.style.background = 'black';

drawShip();