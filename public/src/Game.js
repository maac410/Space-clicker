const Ship = document.getElementsByClassName('Ship');
const ShipSprite = document.querySelector(".Ship");
const pos = {x:0, y:0};

let c = document.getElementById("Space");
let ctx = c.getContext("2d");

document.addEventListener("keydown", (ev) => {

    const dir = (ev.key.match(/(?<=^Arrow)\w+/)||[])[0];
    if (!dir) return; // Not an arrow key.
    
    ev.preventDefault(); // Prevent Browser scroll if overflow
  
    ({
      Left:  () => pos.x -= 10,
      Right: () => pos.x += 10,
    }[dir])(); 
    
    ShipSprite.style.transform = `translate(${pos.x}px`
  });


c.width= 300;
c.height= 700;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1000, 1000);
ctx.fillStyle = "purple";
ctx.fillRect(130, 560, 40, 40);
