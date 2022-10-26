"use strict";
window.onresize = drawLines;

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


let margin = 400;
let canvasWidth = context.canvas.width;

drawLines();

function drawLines() {

    //lines
    context.beginPath();
    context.moveTo(margin, 100);
    context.lineTo(canvasWidth - margin, 100);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 200);
    context.lineTo(canvasWidth - margin, 100);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 200);
    context.lineTo(canvasWidth - margin, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 300);
    context.lineTo(canvasWidth - margin, 200);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 300);
    context.lineTo(canvasWidth - margin, 300);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 400);
    context.lineTo(canvasWidth - margin, 300);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 400);
    context.lineTo(canvasWidth - margin, 400);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 500);
    context.lineTo(canvasWidth - margin, 400);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 500);
    context.lineTo(canvasWidth - margin, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(margin, 100);
    context.lineTo(canvasWidth - margin, 500);
    context.stroke();
}