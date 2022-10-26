"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let radius = 50;

drawRandomCircles();

function drawRandomCircles() {
    for(let i=0; i<10; i++){
        Utils.fillCircle(i*105, 0, radius);
    }

    for(let i=0; i<10; i++){
        Utils.fillCircle(i*105, i* 10, radius);
    }

    
   
}