var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;

var x = 0;
var y = 0;

var input = {
  up: false,
  down: false,
  left: false,
  right: false
};

window.onkeydown = function(event) {
  event.preventDefault();
  switch(event.keyCode) {
    // UP 38, W 87
    // Left 37, A 65
    // Right 39, D 68
    // Down 40, S 83
    case 38:
    case 87:
      input.up = true;
      break;

    case 37:
    case 65:
      input.left = true;      
      break;

    case 39:
    case 68:
      input.right = true;
      break;

    case 40:
    case 83:
      input.down = true;
      break; 
  }
  return false;
}

window.onkeyup = function(event) {
  event.preventDefault();
  switch(event.keyCode) {
    // UP 38, W 87
    // Left 37, A 65
    // Right 39, D 68
    // Down 40, S 83
    case 38:
    case 87:
      input.up = false;
      break;

    case 37:
    case 65:
      input.left = false;      
      break;

    case 39:
    case 68:
      input.right = false;
      break;

    case 40:
    case 83:
      input.down = false;
      break; 
  }
  return false;
}

function loop(){
  if(input.up) y -= 1;
  if(input.down) y += 1;
  if(input.left) x -= 1;
  if(input.right) x += 1;

  ctx.fillStyle = "red"
  ctx.fillRect(x, y, 5, 5); 

  setTimeout(loop, speed);
}

loop();
