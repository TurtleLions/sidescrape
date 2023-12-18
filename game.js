// Copyright (c) 2020 eContriver LLC

var dotX = 0;
var dotY = 0;
var angle = 0;
var velocity = 0;
var visibleCanvas = null;
var context = null;
var dotImage = null;
var TO_RADIANS = Math.PI/180; 

document.addEventListener("DOMContentLoaded", function(event) {
    visibleCanvas = document.getElementById('game');
    visibleCanvas.style.backgroundColor = "red";
    document.addEventListener("keydown", move);
    context = visibleCanvas.getContext('2d');
    dotImage = new Image();
    dotImage.src = 'dot.png';
    dotImage.onload = function() {
        context.drawImage(dotImage, dotX, dotY);
    }
    
});

function move(event) {
    switch (event.key) {
        case "ArrowUp":
            velocity += 1;
            break;
        case "ArrowDown":
            velocity -= 1;
            break;
        case "ArrowLeft":
            angle -= 1;
            break;
        case "ArrowRight":
            angle += 1;
            break;
    }
    context.clearRect(0, 0, visibleCanvas.width, visibleCanvas.height);
    rotateAndPaintImage(context, dotImage, angle*TO_RADIANS, dotX, dotY, dotX, dotY
    context.drawImage(dotImage, dotX, dotY);
    event.preventDefault(); // prevents arrows from scrolling
}
function rotateAndPaintImage ( context, image, angleInRad , positionX, positionY, axisX, axisY ) {
  context.translate(positionX, positionY);
  context.rotate(angleInRad);
  context.drawImage(image, -axisX, -axisY);
  context.rotate(-angleInRad);
  context.translate(-positionX, -positionY);
}
