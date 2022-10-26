"use strict";
window.onresize = drawRectangles;

drawRectangles();

function drawRectangles() {


    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 3;
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();


    context.strokeStyle = "red";
    context.beginPath();

    context.moveTo(50, 50);
    context.lineTo(200, 200);

    context.moveTo(200, 50);
    context.lineTo(50, 200);

    context.stroke();


}