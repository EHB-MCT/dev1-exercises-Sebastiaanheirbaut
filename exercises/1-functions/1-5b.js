"use strict";
window.onresize = drawSun;

drawSun();

function drawSun() {


    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle ="#fea500";
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();

    context.fillStyle = "#ffff01";
    context.beginPath();
    context.ellipse(200, 250, 50, 100, Math.PI / 2, 0, 2 * Math.PI);


    context.fill();

    context.fillStyle ="#0000fe";
    context.beginPath();
    context.rect(50, 250, 300, 100);
    context.fill();



}