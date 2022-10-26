"use strict";
import context from "/../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
    
}

function drawLines() {
    let i = 0;
    while (i < 7) {
        let x = 50
        let y = 200
        Utils.drawLine(x + i * 25, y + i * 25,y + i * 25 ,x + i * 25);
        Utils.drawLine(y - i * 25, x + i * 25, y + 150 - i * 25, y + i * 25);
        i++;
       
    }
}


