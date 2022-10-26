"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;
let width = 600;
let height = 300;

drawLines();

function drawLines(){
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, 600, 300);

    for(let i = 0; i < horizontalLines; i++){
        let step = width / horizontalLines;
        Utils.drawLine(0 + (step * i), 0, width - (step*i), height);
    }

    for(let i = 0; i < verticalLines; i++){
        let step = width / horizontalLines;
        Utils.drawLine(0, 0 + (step * i), width, height - (step*i));
    }

}