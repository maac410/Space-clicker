let c = document.getElementById("Space");
let ctx = c.getContext("2d");
let cShot = c.getContext("2d");
let Cookie = document. getElementById("cookie");

c.width = 300;
c.height = 700;
c.style.background = 'black';


class Shot { constructor(posX, posY, width, height,shotColor){
  this.posX = posX;
  this.posY  = posY;
  this.width  = width;
  this.height  = height;
  this.shotColor = shotColor;
}
drawShot (cShot){
  cShot.fillStyle = this.shotColor;
  cShot.fillRect(this.posX,this.posY,this.width,this.height);
  console.log("shot fired");
}}

let shot = new Shot(148, 500, 5, 30, 'white');
Cookie.addEventListener("click",() => shot.drawShot(cShot)) ;

function drawShip (){
  ctx.fillStyle = "purple";
  ctx.fillRect(130, 560, 40, 30);
  ctx.fillRect(140, 550, 20, 20);
}

function drawEnemy (){
  ctx.fillStyle = "green";
  ctx.fillRect(125, 200, 50, 40);
}

drawEnemy();
drawShip();
