let c = document.getElementById("Space");
let ctx = c.getContext("2d");
let cShot = c.getContext("2d");
let cShot2 = c.getContext("2d");
let Alien = c.getContext("2d");
let Cookie = document. getElementById("cookie");
let alienIsDead = false;

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
  console.log(this.posY);
}
drawShot2(cShot2){
  cShot2.fillStyle="black";
  cShot2.clearRect(this.posX-50,this.posY+20,this.width*50,this.height);
}
update(){
  this.drawShot(cShot);
  this.drawShot2(cShot2);
  this.posY += this.dy;
}}
let shot = new Shot(148, 380, 5, 30, 'white', -20);

class Enemy { constructor(EposX, EposY, Ewidth, Eheight,EColor){
  this.EposX = EposX;
  this.EposY  = EposY;
  this.Ewidth  = Ewidth;
  this.Eheight  = Eheight;
  this.EColor = EColor;
}
  async drawEnemy (Alien){
  let url = "../../Assets/Sprites/Alien 01.png";
  let img = new Image();
  await new Promise(r => img.onload=r, img.src=url);
  Alien.fillStyle = this.EColor;
  Alien.drawImage(img,this.EposX,this.EposY,this.Ewidth,this.Eheight);
  console.log("Alien Attacking");
}
  async drawExplosion (){
  let url = "../../Assets/Sprites/explosion.gif";
  let img = new Image();
  await new Promise(r => img.onload=r, img.src=url);
  alienIsDead=true;
  Alien.fillStyle = this.EColor;
  Alien.drawImage(img,10,-200,300,600);
  console.log("Alien is fucking dead");
}}
let alien = new Enemy(120, 100, 50, 40, 'white');
alien.drawEnemy(Alien);

let updateShot = function(){
  requestAnimationFrame(updateShot);

  if(shot.posY >=  alien.EposY){
    shot.update();
    alien.drawEnemy(Alien);
  } else {
    Alien.clearRect(alien.EposX,alien.EposY,alien.Ewidth,alien.Eheight);
    alien.drawExplosion();
    
  }}

Cookie.addEventListener("click",() => {shot.drawShot(cShot), updateShot(), shot.posY= 550;});

async function drawShip (){
  let url = "../../Assets/Sprites/Ship 01.png";
  let img = new Image();
  await new Promise(r => img.onload=r, img.src=url);
  Alien.drawImage(img,110,600,70,40);
  console.log("ship");
}

c.width = 300;
c.height = 700;
c.style.background = 'black';

drawShip();