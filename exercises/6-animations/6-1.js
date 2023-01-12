"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

/**
 * 
 * @param {MouseEvent} eventData
 */

move(eventData);

function move(eventData){
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);
    console.log(eventData.pageX);
    context.beginPath();

    context.moveTo(eventData.pageX,0);
    context.lineTo(eventData.pageX,height);

    context.moveTo(0,eventData.pageY);
    context.lineTo(width,eventData.pageY);


    
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.stroke();
}