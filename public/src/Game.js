const Ship = document.getElementsByClassName('Ship');
const ShipSprite = document.querySelector(".Ship");
let c = document.getElementById("Space");
let ctx = c.getContext("2d");

let Cookie = document. getElementById("cookie");

let posX = 145;
let posY = 520;
let width = 10;
let height = 10;


function drawShip (){
  ctx.fillStyle = "purple";
  ctx.fillRect(130, 560, 40, 30);
  ctx.fillRect(140, 550, 20, 20);
}

function drawShot (){

  ctx.fillStyle = "white";
  ctx.fillRect(posX,posY,width,height);
  ctx.fillStyle = "white";
  ctx.fillRect(posX, posY - 300,width,height);
  
  console.log(posX);

}

function drawEnemy (){
  ctx.fillStyle = "green";
  ctx.fillRect(125, 200, 50, 40);
}

//function hit(){
  //if(){

  //}

//}

c.width= 300;
c.height= 700;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1000, 1000);

drawEnemy();
drawShip();

Cookie.addEventListener("click", drawShot)


