const Ship = document.getElementsByClassName('Ship');
const ShipSprite = document.querySelector(".Ship");
const pos = {x:0, y:0};

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
