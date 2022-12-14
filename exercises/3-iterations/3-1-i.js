"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawConcentricCircles();
}

function drawConcentricCircles() {
    let i = 0;
    let size = 15
    while (i < 10) {
        Utils.strokeCircle(200,200 ,15 + i * size);

        Utils.strokeCircle(50,50,15 + i * size);
        Utils.strokeCircle(350,50 ,15 + i * size);
        Utils.strokeCircle(50,350 ,15 + i * size);
        Utils.strokeCircle(350,350 ,15 + i * size);
        i++;
    }
}