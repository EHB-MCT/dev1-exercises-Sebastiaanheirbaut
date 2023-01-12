"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPosition = [];
let yPosition = [];

document.onmousemove = move;

function move(e){
    for (let i = 99; i > 0; i--){
        if(i != 99){
            xPosition [i] = xPosition[i-1];
            yPosition [i] = yPosition[i-1];
        }
    }
    xPosition[0] = e.pageX;
    yPosition[0] = e.pageY;
}


draw();

function draw(){
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i = 99; i >= 0; i--){
        context.fillStyle = Utils.hsla(0, 0, i, 50);
        Utils.fillCircle(xPosition[i],yPosition[i],20);
    }

    requestAnimationFrame(draw);
}