"use strict";

window.onresize = drawRectangle;
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRectangle();

function setRandomFill() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    context.fillStyle = "rgb(" + R +","+ G +","+ B +")";
}

function drawRectangle() {

    for (let i = 0; i < 9; i++){
        setRandomFill();
        console.log(i);
        context.beginPath();
        context.rect(150 + 15 * i, 150 + 15 * i, 300 - 30 * i, 300 - 30 * i);
        context.fill();
      
    }

}