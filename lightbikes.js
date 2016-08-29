var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');

var backCanvas = document.create('canvas');
// set width height
var backCtx = backCanvas.getContext('2d');

var speed = 1/16/1000;

var x = 0;
var y = 0;

var image = new Image();
image.src = "file:///Users/v-fexrt/Desktop/Screen Shot 2016-08-29 at 1.53.25 PM.png";

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

function loop(timestamp){
  if(input.up) y -= 1;
  if(input.down) y += 1;
  if(input.left) x -= 1;
  if(input.right) x += 1;

  backCtx.clearRect(0, 0, canvas.width, canvas.height);

  backCtx.drawImage(image, 0, 0, 200, 100);
  for(i = 0; i < 100; i++){
    backCtx.fillStyle = "blue";
    backCtx.fillRect(
       (i*20)%100,
       (i*20)%100,
       10,
       10);
  }

  backCtx.fillStyle = "red"
  backCtx.fillRect(x, y, 5, 5);  

  ctx.drawImage(backCanvas, 0, 0);

  requestAnimationFrame(loop);
}

//var intervalId = setInterval(loop, speed);
requestAnimationFrame(loop);




