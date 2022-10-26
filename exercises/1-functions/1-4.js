"use strict";
window.onresize = drawSquare;

drawSquare();

function drawSquare() {


    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.fillStyle ="#add9e6";
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(100, 50, 250, 250);
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(150, 100, 200, 200);
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(150, 150, 150, 150);
    context.stroke();
    context.fill();





}