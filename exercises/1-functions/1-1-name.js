"use strict";
window.onresize = drawFish;

drawFish();

function drawFish() {


    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    
    context.lineWidth = 10;
    context.strokeStyle = "red";

    context.beginPath();

    //S
    context.moveTo(50, 50);
    context.lineTo(150, 50);

    context.moveTo(50, 150);
    context.lineTo(50, 50);

    context.moveTo(50, 150);
    context.lineTo(150, 150);

    context.moveTo(150, 150);
    context.lineTo(150, 250);

    context.moveTo(50, 250);
    context.lineTo(150, 250);


    //E
    context.moveTo(200, 50);
    context.lineTo(300, 50);

    context.moveTo(200, 250);
    context.lineTo(300, 250);

    context.moveTo(200, 150);
    context.lineTo(300, 150);

    context.moveTo(200, 50);
    context.lineTo(200, 250);


     //B
     context.moveTo(350, 50);
     context.lineTo(350, 250);

     context.moveTo(350, 50);
     context.lineTo(450, 100);

     context.moveTo(450, 100);
     context.lineTo(350, 150);

     context.moveTo(350, 150);
     context.lineTo(450, 200);

     context.moveTo(450, 200);
     context.lineTo(350, 250);


     //A
     context.moveTo(550, 50);
     context.lineTo(500, 250);

     context.moveTo(550, 50);
     context.lineTo(600, 250);

     context.moveTo(500, 150);
     context.lineTo(600, 150);

    context.stroke();
}