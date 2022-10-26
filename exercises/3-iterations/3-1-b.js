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
    while (i < 5) {
        let x = 100
        let y = x
        Utils.drawLine(x , y + i * 50, x * 3 , y + i * 50)
        Utils.drawLine(y + i * 50, x, y + i * 50, x * 3)
        i++;
       
    }
}



