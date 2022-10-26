"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    let distance = 15
    while (i < 8) {
        context.strokeRect(70 + i * distance , 70 + i * distance ,150 , 150);
        i++;
    }
}