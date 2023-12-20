// Copyright (c) 2020 eContriver LLC

var intDotX = 200;
var intDotY = 200;
var dotMag = 0;
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
        context.drawImage(dotImage, intDotX + (dotMag*Math.cos(angle*TO_RADIANS)), intDotY + (dotMag*Math.sin(angle*TO_RADIANS)));
    }
    // while(True){
    //     dotX+=Math.round(velocity*Math.sin(angle*TO_RADIANS))
    //     dotY+=Math.round(velocity*Math.cos(angle*TO_RADIANS))
    //     if(velocity>0){
    //         velocity-=1;
    //     }
    //     dotX+=1;
    // }
});

function move(event) {
    switch (event.key) {
        case "ArrowUp":
            dotMag += 1;
            break;
        case "ArrowDown":
            dotMag -= 1;
            break;
        case "ArrowLeft":
            angle -= 1;
            break;
        case "ArrowRight":
            angle += 1;
            break;
    }
    context.clearRect(0, 0, visibleCanvas.width, visibleCanvas.height);
    event.preventDefault(); // prevents arrows from scrolling
}
